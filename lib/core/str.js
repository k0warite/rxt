import { RXT } from '../../dist/core/runtime.js';

export function print() {
    const bytes = new Uint8Array(
        RXT.map.get('memory').buffer,
        arguments[0],
        arguments[1]
    );

    const str = new TextDecoder('utf8').decode(bytes)
    return console.log(str);
}