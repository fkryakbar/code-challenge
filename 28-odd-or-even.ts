// https://www.codewars.com/kata/5949481f86420f59480000e7

export const oddOrEven = (array: number[]): string => array.reduce((a, b) => a + b, 0) % 2 == 0 ? "even" : "odd";

console.log(oddOrEven([0, 1, 4]));
