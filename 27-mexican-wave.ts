// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/typescript

export const wave = (str: string): Array<string> => {
    return str.split('').map((_, i) => {
        let string = str.split('')
        string[i] = string[i].toUpperCase()
        return string.join('')
    }).filter(string => string != str)
}

console.log(wave('two words'));
