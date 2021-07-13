export function red(s: string): string {
    typeof s === 'string' ? s : s = String(s);
    return `\x1b[31m${s}\x1b[0m`;
}

export function green(s: string): string {
    typeof s === 'string' ? s : s = String(s);
    return `\x1b[32m${s}\x1b[0m`;
}