# Runtime API
In general, your `.wasm` file must have an exported `main` function that returns a `void` or an `i32` with the value of `0`.
> If the return value is an `i32` but not `0`, RXT will treat it as an error code.