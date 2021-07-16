import { RXT } from '../dist/export.js';

console.log('Will log a random number everytime');
await (new RXT('bin/random.wasm')).run();