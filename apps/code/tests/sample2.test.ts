function vendingItem(arr) {
  return {
    column: arr[0],
    row: arr[1],
    costCents: arr[2],
    remainingQuantity: arr[3],
  };
}

export const solution = (
  inventory: number[][],
  purchaseAttempts: number[][],
) => {
  const items = inventory.map(vendingItem).filter((x) => x);
  const columnCount =
    items.reduce((acc, item) => {
      return Math.max(acc, item.column);
    }, 0) + 1;
  const rowCount =
    items.reduce((acc, item) => {
      return Math.max(acc, item.row);
    }, 0) + 1;

  const grid: any[][] = Array.from({ length: rowCount }, () =>
    Array.from({ length: columnCount }, () => null),
  );

  for (const item of items) {
    grid[item.row][item.column] = item;
  }

  for (const purchaseAttempt of purchaseAttempts) {
    if (purchaseAttempt.length !== 2) {
      continue;
    }

    const purchaseColumn = purchaseAttempt[0];
    const purchaseRow = purchaseAttempt[1];

    if (grid.length <= purchaseRow) {
      continue;
    }

    const row = grid[purchaseRow];
    if (row === null || row.length <= purchaseColumn) {
      continue;
    }

    const item = grid[purchaseRow][purchaseColumn];
    if (item) {
      item.remainingQuantity--;
    }
  }

  return items.reduce((acc, item) => {
    return acc + item.remainingQuantity * item.costCents;
  }, 0);
};

describe("solution", () => {
  it("should work", () => {
    const input1 = [
      [0, 1, 100, 2],
      [0, 2, 50, 1],
    ];
    const input2 = [
      [0, 1],
      [0, 1],
      [0, 0],
    ];

    const expected = 50;

    const output = solution(input1, input2);

    expect(output).toEqual(expected);
  });
});
