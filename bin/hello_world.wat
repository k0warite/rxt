(module
    (import "lib" "core::str::print" (func $print_str (param i32 i32)))
    (import "env" "mem" (memory 1))

    (data (i32.const 0) "Hello World from WebAssembly!")

    (func (export "main")
        i32.const 0
        i32.const 29
        call $print_str
    )
)