function red(s: string): string {
    return `\x1b[31m${s}\x1b[0m`;
}

function green(s: string): string {
    return `\x1b[32m${s}\x1b[0m`;
}

function blue(s: string): string {
    return `\x1b[94m${s}\x1b[0m`;
}

// @ts-ignore
function debugCode(code: i32): string {
    return `[${blue(`RXT${code}`)}]`
}

// @ts-ignore
function errorCode(code: i32): string {
    return `[${red(`RXT${code}`)}]`
}

// @ts-ignore
function infoCode(code: i32): string {
    return `[${green(`RXT${code}`)}]`
}

// @ts-ignore
export function info(code: i32, msg: string): string {
    return `${infoCode(code)}: ${msg}`
}

// @ts-ignore
export function debug(code: i32, msg: string): string {
    return `${debugCode(code)}: ${msg}`
}
 
// @ts-ignore
export function error(code: i32, msg: string): string {
    return `${errorCode(code)}: ${msg}`
}