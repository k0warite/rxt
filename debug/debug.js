import { readFileSync } from 'fs';

const buf = readFileSync('bin/module.wasm');
const u8 = new Uint8Array(buf.length);

for (const byte in buf) {
    u8[byte] = buf[byte];
}

console.log(u8);