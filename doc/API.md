# Runtime API
In general, your `.wasm` file must have an exported `main` function that returns a `void` or an `i32` with the value of `0`.
> If the return value is an `i32` but not `0`, RXT will treat it as an error code.

# Library
By default, the runtime comes with some library

### `env`
The enviromental variables passed during runtime
* `mem` - The `WebAssembly.Memory` class passed to the runtime.
* `tbl` - The `WebAssembly.Table` class passed to the runtime.

### `std`
* `print_i32`