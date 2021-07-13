import { abort } from './internal.js';
import { readFile } from 'fs/promises';
import { InternalModule } from '../types/index';

export async function internalLoader(path: string): Promise<InternalModule> {
    const wasm =  new Uint8Array((await readFile(path)).buffer);
    const module = new WebAssembly.Module(wasm);
    const instance = new WebAssembly.Instance(module, { env: { abort: abort }});
    return instance.exports as InternalModule;
}