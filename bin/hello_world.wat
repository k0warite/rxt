(module
    (import "lib" "core::i32::print" (func $print_i32 (param i32)))

    (func $main
        (local $hello_world i32)
        (local.set $hello_world (i32.const "Hello world from RXT Runtime"))

        (call $print_i32 (local.get $hello_world))
    )

    (export "main" (func $main))
)