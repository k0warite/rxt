export interface RuntimeOptions {
    memory?: WebAssembly.Memory;
    table?: WebAssembly.Table;
    env?: Array<string>;
    fastFail?: boolean;
}

export type LoggerType = 'error' | 'info' | 'debug' | 'warn';

export interface InternalModule {
    [key: string]: CallableFunction;
}

export interface Lib {
    name: string;
    fn: CallableFunction;
    type: 'js' | 'wasm'
}