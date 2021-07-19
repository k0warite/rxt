(module
    (import "lib" "core::i32::print" (func $print_i32 (param i32)))
    (func $main
        (local $nine i32)
        (local.set $nine (i32.const 9))

        (call $print_i32 (local.get $nine))
    )

    (export "main" (func $main))
)