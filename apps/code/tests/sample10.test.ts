// Given a number, n, return the length of the longest sequence of characters that contains no repeats.

// Example input:

// n: 1123223
// Example Output:

// 3
// Explanation:

// 123 is the longest substring within 1123223 that contains no repeated characters,
// and its length is 3 characters.

export const solution10 = (n: number): number => {
    const str = n.toString()
    let result = ""
    let start = 0
    let end = 0
    const unique = new Set()

    while (end < str.length) {
        const char = str[end]

        if (unique.has(char)) {
            unique.delete(str[start])
            start++
        } else {
            unique.add(char)
            if (end - start + 1 > result.length) {
                result = str.substring(start, end + 1)
            }
            end++
        }
    }

    return result.length
}

describe("solution10", () => {
    it("should work first case", () => {
        expect(solution10(123)).toEqual(3)
    })

    it("should work second case", () => {
        expect(solution10(123456789)).toEqual(9)
    })

    it("should work third case", () => {
        expect(solution10(1012345678910)).toEqual(10)
    })

    it("should work third case", () => {
        expect(solution10(1012345678910)).toEqual(10)
    })
    it("should work fourth case", () => {
        expect(solution10(4079718950849)).toEqual(6)
    })
})
