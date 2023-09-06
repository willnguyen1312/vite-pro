const solution = (values: number[], n: number, k: number) => {
    const filteredValues = [...new Set(values)].filter((x) => { return x % k == 0 });
    filteredValues.sort((x, y) => { return y - x });
    return filteredValues[n - 1] || -1;
}


describe("solution", () => {
    it("should return work", () => {
        const input = [4, 9, 3, 12, 6, 4, 15]

        const output = solution(input, 4, 3)


        expect(output).toEqual(6)

    })

    it("should also work", () => {
        const input = [4, 6, 8, 6]

        const output = solution(input, 3, 2)


        expect(output).toEqual(4)

    })
})