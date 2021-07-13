export interface RuntimeOptions {
    memory?: WebAssembly.Memory;
    fastFail?: boolean;
}

export namespace Utils {
    type LoggerType = 'error' | 'info' | 'debug' | 'warn';
}