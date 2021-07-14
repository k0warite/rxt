import { cliParser } from './utils/cli_parser.js';
import { RXT } from './runtime.js';

export function cli() {
    const result = cliParser([
        { name: 'help', alias: 'h', type: Boolean },
        { name: 'file', alias: 'f', type: String },
    ]);
}

if (import.meta.url) {
    cli();
}