export function i32_rand() {
    return Math.random() * (arguments[1] - arguments[0]) + arguments[0];
}

export function i64_rand() {
    return Math.random() * (arguments[1] - arguments[0]) + arguments[0];
}

export function i32_rand_whole() {
    var min = Math.ceil(arguments[0]);
    var max = Math.floor(arguments[1]);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function i64_rand_whole() {
    var min = Math.ceil(arguments[0]);
    var max = Math.floor(arguments[1]);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}