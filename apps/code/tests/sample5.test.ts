export const solution5 = (n: number) => {
    const memo = Array(n + 1).fill(0)
    memo[0] = 1
    memo[1] = 1
    memo[2] = 2

    for (let i = 3; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3]
    }

    return memo[n]
}

export function alternative(n: number) {
    const memo = new Map<number, number>()

    const recurse = (n: number): number => {
        if (n < 0) {
            return 0
        }

        if (n === 0) {
            return 1
        }

        if (memo.has(n)) {
            return memo.get(n)!
        }

        const result = recurse(n - 1) + recurse(n - 2) + recurse(n - 3)

        memo.set(n, result)

        return result
    }

    return recurse(n)
}


// You are at the bottom of a staircase with n stairs.
// You can jump 1, 2, or 3 stairs at a time. How many different ways can you jump up the stairs?

// Example Input:

// n: 3
// Example Output:

// 4
// Explanation:

// There are 4 different ways you can jump up to the top of the stairs:
// jump 1 stair, jump 1 stair, jump 1 stair
// jump 2 stairs at once, jump 1 stair
// jump 1 stair, jump 2 stairs at once
// jump 3 stairs at once

describe("solution5", () => {
    it("should work", () => {
        const input = 3

        const output = solution5(input)

        const expected = 4

        expect(output).toEqual(expected)
    })
})
