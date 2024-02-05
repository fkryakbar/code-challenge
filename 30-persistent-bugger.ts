// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/typescript

export function persistence(num: number): number {
    let state = true;
    let init: number = num;
    let buggers: number[] = []
    while (state) {
        if (init.toString().split('').length == 1) {
            state = false;
        } else {
            init = Number(init.toString().split('').reduce((a, b) => (Number(a) * Number(b)).toString()))
            buggers.push(init);
        }
    }
    return buggers.length;
}

console.log(persistence(39));
