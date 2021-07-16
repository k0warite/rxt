import chalk from 'chalk';

export function debug(msg: string): void {
    return console.log(`[${chalk.grey('Debug')}]: ${msg}`);
}

export function info(msg: string): void {
    return console.log(`[${chalk.blueBright('Info')}]: ${msg}`);
}

export function error(msg: string): void {
    return console.log(`[${chalk.red('Error')}]: ${msg}`)
}