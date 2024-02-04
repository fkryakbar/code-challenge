export function inArray(a1: string[], a2: string[]): string[] {
    const result: string[] = [];
    a1.forEach(x => {
        a2.forEach(y => {
            if (y.includes(x)) {
                result.push(x)
            }

        })
    })
    return [...new Set(result)].sort()
}


console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));
console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]));
