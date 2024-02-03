// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/typescript

export const findOdd = (xs: number[]): number => {
    const container: any = {};
    xs.forEach((x: number) => {
        if (container[x]) {
            container[x] += 1;
        } else {
            container[x] = 1;
        }
    })
    return Number(Object.keys(container).filter(y => (container[y] % 2 != 0) ? y : null)[0]);
};


console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

