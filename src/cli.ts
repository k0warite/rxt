import { cliParser } from './utils/cli_parser.js';
import { RXT } from './api.js';

export function cli() {
    const result = cliParser([
        { name: 'help', alias: 'h', type: Boolean }
    ]);
}

if (import.meta.url) {
    cli();
}