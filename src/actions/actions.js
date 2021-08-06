export const CLEAR = 'CLEAR';
export const PLUS = 'PLUS';
export const MINUS = 'MINUS';
export const MULTIPLICATION = 'MULTIPLICATION';
export const DIVISION = 'DIVISION';
export const POWER = 'POWER';
export const ROOT = 'ROOT';
export const CASE_ZERO = 'CASE_ZERO';
export const SET_OPERATOR = 'OPERATOR';
export const DEC_POINT = 'DEC_POINT';
// export const PREV = 'PREV';

export function clear() {
    return {type: CLEAR};
}

export function caseZero(num_x) {
    return {type: CASE_ZERO, num_x: num_x};
}
export function plus() {
    return {type: PLUS};
}

export function minus() {
    return {type: MINUS,};
}

export function multiplication() {
    return {type: MULTIPLICATION};
}

export function division() {
    return {type: DIVISION,};
}

export function power() {
    return {type: POWER};
}

export function root() {
    return {type: ROOT,};
}

export function setOperator(operator) {
    return {type: SET_OPERATOR, operator: operator};
}

export function decPoint(isPoint) {
    return {type: DEC_POINT, isPoint: isPoint};
}

// export function prev(num_x) {
//     return {type: PREV, num_x: num_x};
// }
