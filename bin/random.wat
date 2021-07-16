(module

    ;; Import the libraries
    (import "lib" "core::i32::print" (func $print_i32 (param i32)))
    (import "lib" "js::math_lib::i32_rand_whole" (func $i32_rand_whole (param i32) (param i32) (result i32)))

    ;; Declare our main function
    (func $main
        ;; Declare some i32 variables
        (local $min i32)
        (local $max i32)
        (local $rand i32)

        ;; Set the value
        (local.set $min (i32.const 10))
        (local.set $max (i32.const 15))

        ;; Call the i32_rand_whole function and set the value to $rand
        (local.set $rand (call $i32_rand_whole (local.get $min) (local.get $max)))

        ;; Call the print_i32 function
        (call $print_i32 (local.get $rand))
    )

    ;; Export it
    (export "main" (func $main))
)