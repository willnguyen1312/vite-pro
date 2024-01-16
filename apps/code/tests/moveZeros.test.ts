export function moveZeros(input: number[]): number[] {
  const result: number[] = [];
  let countZeros = 0;

  for (const num of input) {
    if (num === 0) {
      countZeros++;
    } else {
      result.push(num);
    }
  }

  while (countZeros > 0) {
    result.push(0);
    countZeros--;
  }

  return result;
}
// Time complexity: O(n)
// Space complexity: O(n)

describe("moveZeros", () => {
  it("should work as expected", () => {
    const input = [3, 55, 96, -3, 0, 35, 0, 0, 555, 2];
    // ...........................2.................0
    // ..................................555....0...0]
    // Time complexity: O(n)
    // Space complexity: O(1)
    const expected = [3, 55, 96, -3, 35, 555, 2, 0, 0, 0];

    const output = moveZeros(input);
    expect(output).toEqual(expected);
  });
});
