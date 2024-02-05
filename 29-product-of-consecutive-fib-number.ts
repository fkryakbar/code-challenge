export const productFib = (prod: number): [number, number, boolean] => {
    let init = 1;
    let fib: number[] = [0, 1];
    let state = true;
    let answer: [number, number, boolean] = [-1, -1, false]
    while (state) {
        fib.push(fib[init - 1] + fib[init])
        if (fib[init - 1] * fib[init] >= prod) {
            answer[0] = fib[init - 1];
            answer[1] = fib[init];
            answer[2] = fib[init - 1] * fib[init] == prod ? true : false;
            state = false;
        }
        init++
    }
    return answer
}

console.log(productFib(84049690));

