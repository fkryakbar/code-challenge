// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/typescript

/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
    let init = 0;
    let result: number[] = [];
    data.split('').forEach((a) => {
        if (a == 'i') init++;
        if (a == 'd') init--;
        if (a == 's') init = init ** 2;
        if (a == 'o') result.push(init);
    })


    return result
}

console.log(parse("iiisdoso"));
