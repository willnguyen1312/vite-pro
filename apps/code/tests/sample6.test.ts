export const solution = (numbers: number[]) => {
    let largestSum = 0
    while (numbers.length > 0) {
        let previousNumber = numbers.shift()
        if (previousNumber < 0) {
            return -1
        }

        let sum = previousNumber

        while (numbers.length) {
            let currentNumber = numbers.shift()
            if (currentNumber < 0) {
                return -1
            }

            if (currentNumber === previousNumber - 1) {
                sum += currentNumber
                previousNumber = currentNumber
            } else {
                numbers.unshift(currentNumber)
                break
            }
        }

        largestSum = Math.max(largestSum, sum)
    }

    return largestSum
}

// Given an array of numbers, find the largest sum of consecutive decreasing positive integers.

// Notes:

// Duplicate values should be ignored.
// If any value in the sequence is not a positive integer, return -1.
// For example:

// Input: [9, 5, 12, 6, 5, 4, 1]

// Output: 15 (added 6 + 5 + 4)

describe("solution6", () => {
    it("should work", () => {
        const input = [9, 5, 12, 6, 5, 4, 1]

        const output = solution(input)

        const expected = 15

        expect(output).toEqual(expected)
    })
})
