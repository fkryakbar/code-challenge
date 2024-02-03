// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/typescript
export const reverseWords = (str: string): string => str.split(' ').map((words: string): string => words.split('').reverse().join('')).join(' ');


console.log(reverseWords('This is an example!'));
