# Runtime API
In general, your `.wasm` file must have an exported `main` function that returns a `void` or an `i32` with the value of `0`.
> If the return value is an `i32` but not `0`, RXT will treat it as an error code.

# Library
By default, the runtime comes with some library

## `env`
The enviromental variables passed during runtime

### `mem`
An instance of the `WebAssembly.Memory` class if possible, else `undefined` is passed.

* `WebAssembly.Memory`
* `undefined`

### `tbl`
An instance of the `WebAssembly.Table` class if possible, else `undefined` is passed.
* `WebAssembly.Table`
* `undefined`

## `std`
The `std` library comes with:

### `i32`
The `i32` types come with the following functions:

* `print` - `print(arg i32): none`
* `add` - `add(x i32, y i32): i32`
* `minus` - `minus(x i32, y i32): i32`
* `multiply` - `multiply(x i32): i32`
* `division` - `division(x i32): i32`
* `square` - `square(x i32): i32`
* `cube` - `cube(x i32): i32`

### `i64`
The `i64` types come with the following functions:

* `print` - `print(arg i64): none`
* `add` - `add(x i64, y i64): i64`
* `minus` - `minus(x i64, y i64): i64`
* `multiply` - `multiply(x i64): i64`
* `division` - `division(x i64): i64`
* `square` - `square(x i64): i64`
* `cube` - `cube(x i64): i64`

### `f32`
The `f32` types come with the following functions:

* `print` - `print(arg f32): none`
* `add` - `add(x f32, y f32): f32`
* `minus` - `minus(x f32, y f32): f32`
* `multiply` - `multiply(x f32): f32`
* `division` - `division(x f32): f32`
* `square` - `square(x f32): f32`
* `cube` - `cube(x f32): f32`

### `f64`
The `f64` types come with the following functions:

* `print` - `print(arg f64): none`
* `add` - `add(x f64, y f64): f64`
* `minus` - `minus(x f64, y f64): f64`
* `multiply` - `multiply(x f64): f64`
* `division` - `division(x f64): f64`
* `square` - `square(x f64): f64`
* `cube` - `cube(x f64): f64`

### `none`
The `none` types come with the following functions:

* `drop` - `drop(): none`
* `copy` - `copy(): none`
* `move` - `move(): none`

> **Note**: the `none` type has not been implemented yet.

## `js`
The `js` library comes with:

### `math_lib`
* `i32_rand` - `i32_rand(min i32, max i32): f32`
* `i64_rand` - `i64_rand(min i64, max i64): f64`
* `i32_rand_whole` - `i32_rand_whole(min i32, max i32): i32`
* `i64_rand_whole` - `i64_rand_whole(min i64, max i64): i64`