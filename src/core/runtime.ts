import { readFileSync } from 'fs';
import { RuntimeOptions } from '../../types/index';
import { libLoader } from './lib_loader.js';
import { abort, trace } from './internal.js';
import { debug, error } from './logger.js';

export class RXT {
    public static map: Map<string, any> = new Map();
    private wasm: Uint8Array;
    private option: RuntimeOptions;

    /**
     * @param wasm 
     * The WebAssembly bytecode or the path to the `.wasm` file
     * 
     * @param option 
     * The WebAssembly runtime options
     * 
     * @example
     * ```ts
     * const rxt: RXT = new RXT('./test.wasm', {
     *   memory: new WebAssembly.Memory({ maximum: 100, initial: 10 }),
     *   fastFail: false
     * });
     * ```
     */
    constructor(wasm: string | Uint8Array, option?: RuntimeOptions) {
        if (typeof wasm === 'string') {
            const buf = readFileSync(wasm);

            wasm = new Uint8Array(buf.length);
            for (let byte = 0; byte < buf.length; byte++) {
                wasm[byte] = buf[byte];
            }
        }
        
        if (!option) option = {};
        this.option = option;
        this.wasm = wasm;

        if (this.option.memory instanceof WebAssembly.Memory) RXT.map.set('memory', this.option.memory);
        if (this.option.table instanceof WebAssembly.Table) RXT.map.set('table', this.option.table);
    }

    /**
     * @example
     * ```ts
     * await rxt.run();
     * ```
     */
    public async run(): Promise<void> {
        const imports: WebAssembly.Imports = { env: {}, lib: {} };
        if (this.option.memory instanceof WebAssembly.Memory) imports.env.mem = this.option.memory;
        if (this.option.table instanceof WebAssembly.Table) imports.env.tbl = this.option.table;

        imports.env.abort = abort;
        imports.env.trace = trace;

        for (const lib of await libLoader()) {
            imports.lib[lib.name] = lib.fn;
        }

        const { exports } = new WebAssembly.Instance(new WebAssembly.Module(this.wasm), imports);
        
        if (exports.main && typeof exports.main === 'function') {
            const result = await exports.main();

            if (typeof result === 'number' && result !== 0) {
                error(`Process exited with exit code: ${result}`);
                return process.exit(result);
            }
        } else {
            const wasmCode: Array<string> = [];
            this.wasm.forEach(x => wasmCode.push(x.toString(16).length === 1 ? '0x' + x.toString(16) + '0': '0x' + x.toString(16)));

            debug(`WebAssembly header: ${wasmCode[0]} ${wasmCode[1]} ${wasmCode[2]} ${wasmCode[3]}`);
            debug(`WebAssembly version: ${wasmCode[4]} ${wasmCode[5]} ${wasmCode[6]} ${wasmCode[7]}`);
            debug('Unwanted results? Try exporting the `main` function');
        }
    }
}