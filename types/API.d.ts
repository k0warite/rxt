export namespace Lib {
    interface std {
        write: (...args: any) => void;
    }

    interface core {
        i32: Typed<WebAssemblyType.i32>;
        i64: Typed<WebAssemblyType.i64>;
        f32: Typed<WebAssemblyType.f32>;
        f64: Typed<WebAssemblyType.f64>;
    }

    interface env {
        mem?: WebAssembly.Memory;
        tbl?: WebAssembly.Table;
        abort: CallableFunction;
        trace: CallableFunction;
    }
}

export namespace WebAssemblyType  {
    type i32 = number;
    type i64 = number;
    type f32 = number;
    type f64 = number;
}

interface Typed<T> {
    print: (arg: T) => void;
    add: (x: T, y: T) => T;
    minus: (x: T, y: T) => T;
    multiply: (x: T, y: T) => T;
    division: (x: T, y: T) => T;
    square: (x: T) => T;
    cube: (x: T) => T;
}