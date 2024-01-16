export const solution = (prices: number[], trades: number[][]) => {
  const sharesHeld: {
    price: number;
    shares: number;
  }[] = [];
  let profit = 0;

  for (const trade of trades) {
    const isPurchase = trade[1] > 0;
    let shares = trade[1];
    const price = prices[trade[0]];

    if (isPurchase) {
      sharesHeld.push({
        price,
        shares: shares,
      });
      continue;
    }

    let normalizedShares = Math.abs(shares);

    for (let i = 0; i < sharesHeld.length; i++) {
      const item = sharesHeld[i];

      if (item.shares > normalizedShares) {
        item.shares -= normalizedShares;
        profit = profit + (price - item.price) * normalizedShares;
        break;
      }

      normalizedShares -= item.shares;
      profit = profit + (price - item.price) * item.shares;
      item.shares = 0;
    }
  }

  return profit;
};

// We've provided a program that was designed to accomplish the following task, but doesn't work properly (as indicated by failing tests). Your task is to fix the bugs in this program so the tests pass.

// Given a list of stock prices over a period of days and a set of trades performed on various days, calculate the total profit or loss at the end of the time period.

// Each stock trade is expressed as [{day}, {number of shares}]. The number of shares is positive for a purchase, and negative for a sale of purchased shares.

// Notes:

// It is safe to assume that trade requests are valid and are performed on days correlating to the 0-indexed list of stock prices.
// Stock trades are performed in first-in-first-out order.
// Example:

// Stock prices: [1, 2, 3, 4]

// Trades: [[0, 10], [1, -5], [2, 10], [3, -15]]

// Result: 30 ($1 profit * 5 shares, $1 profit * 10 shares, $3 profit * 5 shares)

describe("solution", () => {
  it("should work", () => {
    expect(
      solution(
        [1, 2, 3, 4],
        [
          [0, 10],
          [1, -5],
          [2, 10],
          [3, -15],
        ],
      ),
    ).toEqual(30);
  });
});
