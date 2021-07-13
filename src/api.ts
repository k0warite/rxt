import { readFileSync } from 'fs';
import { RuntimeOptions } from '../types/global';

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
     *   memory: new WebAssembly.Memory({ maximum: 100 }),
     *   fastFail: false
     * });
     * ```
     */
    constructor(wasm: string | Uint8Array, option?: RuntimeOptions) {
        if (typeof wasm === 'string') {
            if (!wasm.endsWith('.wasm')) {
                //
            }

            wasm = new Uint8Array(readFileSync(wasm).buffer);
        }

        if (!option) option = {};
        this.option = option;
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
    }
}