import { RXT } from '../dist/export.js';

// Failing without string support
await (new RXT('bin/hello_world.wasm', {
    memory: new WebAssembly.Memory({ initial: 1 })
})).run();