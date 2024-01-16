// When planting flowers in a pot, it's important to make sure that whenever you water your plant any water that doesn't get absorbed by the roots drains out the bottom of the pot. Otherwise, the water will pool in the bottom of the pot and cause your plant to rot.

// You recently decided to plant some flowers of your own, and decided to fill the base of the pot with gravel. You've decided to write code to verify whether water will successfully drain out of the pot.

// Using a 2D array to represent your pot, individual pieces of gravel are notated with a 1 and empty spaces between gravel are notated with a 0.

// Example Pot #1:

// [
//     [0, 1, 1, 1, 1],
//     [0, 1, 0, 0, 0],
//     [0, 0, 0, 1, 0],
//     [1, 1, 1, 1, 0],
//     [1, 0, 0, 1, 0],
// ]
// Write a function to determine whether the water can fall from the top row to the bottom, moving through the spaces between the gravel. Taking the example pot from above, you can see the possible path, which is marked by replacing the relevant 0's with asterisks (*).

// [
//     [*, 1, 1, 1, 1],
//     [*, 1, *, *, *],
//     [*, *, *, 1, *],
//     [1, 1, 1, 1, *],
//     [1, 0, 0, 1, *],
// ]
// Notice that the path includes both the top and bottom rows.

// Allowed moves:

// The only moves allowed are up, down, left, and right. Diagonals are not allowed.

// Here are a few pots that don't drain properly, along with explanations.

// [
//     [1, 1, 1],
//     [1, 1, 0],
//     [1, 0, 0],
// ]
// Explanation: The top row has no gaps.

export const solution = (pot: number[][]): boolean => {
  const numbRow = pot.length;
  const numbColumn = pot[0].length;
  const visited = new Set();

  const dfs = (row, col) => {
    if (row < 0 || row >= numbRow || col < 0 || col >= numbColumn) {
      return false;
    }

    if (pot[row][col] === 1) {
      return false;
    }

    if (row === numbRow - 1 && col === numbColumn - 1) {
      return true;
    }

    const key = `${row}-${col}`;
    if (visited.has(key)) {
      return false;
    }
    visited.add(key);

    return (
      dfs(row - 1, col) ||
      dfs(row + 1, col) ||
      dfs(row, col - 1) ||
      dfs(row, col + 1)
    );
  };

  for (let col = 0; col < numbColumn; col++) {
    if (dfs(0, col)) {
      return true;
    }
  }

  return false;
};

describe("solution", () => {
  it("should work first case", () => {
    const input = [
      [0, 1, 1, 1, 1],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 1, 0],
    ];

    const output = solution(input);

    const expected = true;
    expect(output).toEqual(expected);
  });

  it("should work second case", () => {
    const input = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 0],
    ];

    const output = solution(input);

    const expected = false;
    expect(output).toEqual(expected);
  });

  it("should work third case", () => {
    const input = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 0],
    ];

    const output = solution(input);

    const expected = false;
    expect(output).toEqual(expected);
  });

  it("should work fourth case", () => {
    const input = [
      [0, 1, 1, 1, 1],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 1, 1],
    ];

    const output = solution(input);

    const expected = false;
    expect(output).toEqual(expected);
  });

  it("should work fifth case", () => {
    const input = [[1]];
    const expected = false;

    const output = solution(input);
    expect(output).toEqual(expected);
  });

  it("should work sixth case", () => {
    const input = [
      [1, 1],
      [0, 1],
    ];
    const expected = false;
    const output = solution(input);
    expect(output).toEqual(expected);
  });

  it("should work seventh case", () => {
    const input = [
      [1, 0],
      [0, 1],
    ];
    const expected = false;
    const output = solution(input);
    expect(output).toEqual(expected);
  });
});
