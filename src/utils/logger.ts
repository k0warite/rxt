function red(s: string): string {
    return `\x1b[31m${s}\x1b[0m`;
}

function green(s: string): string {
    return `\x1b[32m${s}\x1b[0m`;
}

function blue(s: string): string {
    return `\x1b[94m${s}\x1b[0m`;
}

function debugCode(code: number): string {
    return `[${blue(`RXT${code}`)}]`
}

function errorCode(code: number): string {
    return `[${red(`RXT${code}`)}]`
}

function infoCode(code: number): string {
    return `[${green(`RXT${code}`)}]`
}

export function info(code: number, msg: string): string {
    return `${infoCode(code)}: ${msg}`
}

export function debug(code: number, msg: string): string {
    return `${debugCode(code)}: ${msg}`
}
 
export function error(code: number, msg: string): string {
    return `${errorCode(code)}: ${msg}`
}