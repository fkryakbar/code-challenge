// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/typescript

export const nbYear = (p0: number, percent: number, aug: number, p: number): number => {
    let i = 0;
    let init = p0
    while (init < p) {
        init = Math.floor(init + (init * (percent / 100)) + aug)
        i++;
    }
    return i
}

console.log(nbYear(1500000, 0, 10000, 2000000));
