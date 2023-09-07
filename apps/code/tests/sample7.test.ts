var cache = {}
var calculationsPerformed = 0

export function factorial(value) {
    if (value <= 1) {
        return value
    }

    const cached = cache[value]
    if (cached) {
        return cached
    }

    const result = value * factorial(value - 1)
    cache[value] = result
    calculationsPerformed++
    return result
}

export const solution7 = (numbersToCalculate) => {
    const results = []
    for (const value of numbersToCalculate) {
        const result = factorial(value)
        results.push([result, calculationsPerformed])
        calculationsPerformed = 0
    }

    cache = {}
    return results
}

// Given a series of numbers, calculate the factorial of each one.

// Memoization should be used in this problem to reduce the amount of recursive calls made when calculating subsequent factorials: Once a value's factorial has been calculated, it should be cached so that the calculation for that value does not need to be performed again for future numbers.

// In addition to returning the resulting factorial for each number, the count of calculations performed (i.e., multiplications performed due to lack of cached values) should also be returned to validate that memoization is working correctly. Each result is returned as a pair of [{factorial}, {calculationCount}].

// The cache should be reset after each call to solution().
// The value of 1 should not be considered a calculation since no multiplication is required.
// Example:

// Input: [5, 6, 3]

// Result: [[120, 4], [720, 1], [6, 0]]

describe("solution7", () => {
    it("should work", () => {
        const input = [5, 6, 3]

        const output = solution7(input)

        const expected = [
            [120, 4],
            [720, 1],
            [6, 0],
        ]

        expect(output).toEqual(expected)
    })
})
