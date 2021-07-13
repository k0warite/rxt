export interface RuntimeOptions {
    memory?: WebAssembly.Memory;
    fastFail?: boolean;
}

export type LoggerType = 'error' | 'info' | 'debug' | 'warn';

export interface InternalModule {
    [key: string]: CallableFunction;
}