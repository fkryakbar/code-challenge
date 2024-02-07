// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/typescript


export const likes = (a: string[]): string => {
    let theString = ''
    if (a.length >= 4) {
        theString += `${a.slice(0, 2).join(', ')} and ${a.length - 2} others like this`
    } else if (a.length >= 3) {
        theString += `${a.slice(0, 2).join(', ')} and ${a.slice(-1)} like this`
    } else if (a.length >= 2) {
        theString += `${a.slice(0, 2).join(' and ')} like this`
    } else if (a.length >= 1) {
        theString += `${a[0]} likes this`
    } else {
        theString += `no one likes this`
    }
    return theString
}

console.log(likes(["Alex", "Jacob", "Mark", "Max", "fikri"]));
