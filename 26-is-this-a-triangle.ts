// https://www.codewars.com/kata/56606694ec01347ce800001b
export const isTriangle = (a: number, b: number, c: number): boolean => a + b > c && a + c > b && b + c > a;

console.log(isTriangle(1, 2, 2));


