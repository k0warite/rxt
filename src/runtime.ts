import { readFileSync } from 'fs';
import { RuntimeOptions } from '../types/index';
import { internalLoader } from './internal_loader.js';
// import { lib } from './lib.js';

const __module__ = {
    logger: await internalLoader('./utils/logger.wasm'),
}

export class RXT {
    private wasm: Uint8Array;
    private option: RuntimeOptions;

    /**
     * @param wasm 
     * The WebAssembly bytecode or the relative path to the `.wasm` file
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
            if (!wasm.endsWith('.wasm')) {
                console.log(__module__.logger.error(1, '[INVALID] The file extension is currently not supported'));
                process.exit(1);
            }

            wasm = new Uint8Array(readFileSync(wasm).buffer);
        }

        if (!option) option = {};
        this.option = option;
        this.wasm = wasm;
    }

    private async _optimize(): Promise<void> {}

    /**
     * @param optimize
     * Set this to `true` and RXT will try to optimize the runtime
     * 
     * @example
     * ```ts
     * await rxt.run();       // No optimization
     * await rxt.run(false);  // No optimization
     * await rxt.run(true);   // Optimization
     * ```
     */
    public async run(optimize?: boolean): Promise<void> {
        if (optimize && optimize === true) {
            await this._optimize();
        }

        const imports: WebAssembly.Imports = { env: {}, lib: {} };
        if (this.option.memory instanceof WebAssembly.Memory) imports.env.memory = this.option.memory;
        if (this.option.table instanceof WebAssembly.Table) imports.env.table = this.option.table;

        const instance = new WebAssembly.Instance(this.wasm, imports);
    }
}