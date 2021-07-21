import chalk from 'chalk';
import { readFileSync } from 'fs';

const { version, name, author } = await JSON.parse(readFileSync('./package.json', 'utf8'));

export function help() {
    console.log(chalk.whiteBright(`${name}@${version}`));
    console.log('Author:', chalk.whiteBright(author));

    console.log(chalk.whiteBright('\nUsage:'));
    console.log('  rxt [...Options] [File]');

    console.log(chalk.whiteBright('\nExample:'));
    console.log( '  rxt --file main.wasm', chalk.grey('   # Run or execute a .wasm file'));
    console.log('  rxt --build main.wat', chalk.grey('   # Compile a .wat file to a .wasm binary'));

    console.log(chalk.whiteBright('\nOptions:'));
    console.log('  -r, --run    [File]     Run or execute a .wasm binary');
    console.log('  -e, --exec   [File]     Alias for --run');
    console.log('  -b, --build  [File]     Compile a .wat file to a .wasm binary');
    console.log('  -v, --version           Prints the runtime version to STDOUT');
    console.log('  -h, --help              Show this message');

    console.log(chalk.whiteBright('\nFile:'));
    console.log('  *.wat                   WebAssembly text file');
    console.log('  *.wasm                  WebAssembly binary file')
    process.exit(0);
}