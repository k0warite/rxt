export function print() {
    return console.log(arguments[0]);
}

export function add() {
    return arguments[0] + arguments[1];
}

export function minus() {
    return arguments[0] - arguments[1];
}

export function multiply() {
    return arguments[0] * arguments[1];
}

export function division() {
    return arguments[0] / arguments[1];
}

export function square() {
    return arguments[0] * arguments[0];
}

export function cube() {
    return arguments[0] * arguments[0] * arguments[0];
}