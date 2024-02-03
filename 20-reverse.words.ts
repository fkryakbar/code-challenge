export const reverseWords = (str: string): string => str.split(' ').map((words: string): string => words.split('').reverse().join('')).join(' ');


console.log(reverseWords('This is an example!'));
