// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/typescript

export function rowSumOddNumbers(n: number): number {
    const oddNumbers: number[] = []
    let init = 1;
    for (let i = 1; i <= n + 1; i++) {
        for (let j = 0; j < i - 1; j++) {
            oddNumbers.push(init)
            init += 2
        }

    }
    return oddNumbers.slice(-n).reduce((a, b) => a + b, 0)
}


console.log(rowSumOddNumbers(13));
