import { cliParser } from './cli_parser.js';
import { RXT } from './runtime.js';

export function cli() {
    const result = cliParser([
        { name: 'help', alias: 'h', type: Boolean },
        { name: 'version', alias: 'V', type: Boolean },
        { name: 'file', alias: 'f', type: String },
    ]);

    if (result.help) {}

    else if (result.version) {}
}

if (import.meta.url) {
    cli();
}