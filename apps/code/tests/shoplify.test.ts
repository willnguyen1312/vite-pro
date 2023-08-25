// Kelly is a Shopify merchant with an online store.  In order to increase customer
// basket size, Kelly would like to recommend items based on what is inside a
// customer basket.

// Each product has been given a weight to use for recommendations. The higher the
// weight, the more likely it should be recommended. Given a list of products,
// their recommendation weights, and current customer basket, return a recommended
// item. This is the item that has the highest recommendation weight, but is not in
// the customer's current basket.

// A diagram of the inputs/outputs:

//   recommend(
//     [
// //     +-------- A product
// //     |           +---- A recommendation weight
// //     |           |
// //     ▼           ▼
//       ["pencil",   20],  // ᐊ---- a product and weight pair
//       ["paper",    30],
//       ["envelope", 10],
//     ],          // ᐊ---- a list of recommendations
// //   +---+---+---- products
// //   |        |
// //   ▼        ▼
//     ["paper", "pencil"] // ᐊ---- a customer basket
//   ) => "envelope"       // ᐊ---- recommended product
// Examples:

//    recommend([
//      ["paper", 10],
//    ], []) => "paper"

// We recommend paper because it is the only recommendation.
// recommend([
//      ["paper", 10],
//      ["pencil", 5],
//    ], ["paper"]) => "pencil"

// We recommend pencil because paper is already in the basket.
// Shawn Chen1:06 PM
// recommend([
//      ["envelope", 1],
//      ["pencil", 10],
//      ["paper", 5],
//    ], ["pencil", "paper"]) => "envelope"

// We recommend envelope because paper and pencil are already in the basket
// recommend([
//     ["envelope", 1],
//     ["pencil", 10],
//     ["paper", 5],
//   ], ["pencil"]) => "paper"

// We recommend paper because it has a higher weight than envelope
// and pencil is already in the basket.

// First step: Sort items in store based on weight - O(n log n) in descending order
// Sorted store - [["pencil", 10], ["paper", 5] ["envelope", 1]]

// Second step: Iterate through sorted store and filter out items that are in basket - O(n)
//    [["paper", 5], ["envelope", 1]]

// Final step: Return the first item in filtered store - O(1)

function recommend(store: [string, number][], basket: string[]): string {
    // First step - O(n log n)
    const sortedStore = store.sort((a, b) => b[1] - a[1])

    // Second step
    const basketSet = new Set(basket)
    const filteredStore = sortedStore.filter((item) => !basketSet.has(item[0]))

    return filteredStore.length ? filteredStore[0][0] : ""
}

// Max heap solution - O(log n)
// Insertion - O(log n)
// Deletion - O(log n)
// Peek - O(1)

describe("recommend", () => {
    it("first case", () => {
        expect(
            recommend(
                [
                    ["pencil", 20],
                    ["paper", 30],
                    ["envelope", 10],
                ],
                ["paper", "pencil"],
            ),
        ).toEqual("envelope")
    })

    it("second case", () => {
        expect(recommend([["paper", 10]], [])).toEqual("paper")
    })

    it("third case", () => {
        expect(
            recommend(
                [
                    ["paper", 10],
                    ["pencil", 5],
                ],
                ["paper"],
            ),
        ).toEqual("pencil")
    })

    it("fourth case", () => {
        expect(
            recommend(
                [
                    ["envelope", 1],
                    ["pencil", 10],
                    ["paper", 5],
                ],
                ["pencil", "paper"],
            ),
        ).toEqual("envelope")
    })

    it("fifth case", () => {
        const store = [
            ["envelope", 1],
            ["pencil", 10],
            ["paper", 5],
        ] as [string, number][]
        const currentBasket = ["pencil"]
        const output = recommend(store, currentBasket)
        const expected = "paper"
        expect(output).toEqual(expected)
    })

    it("sixth case", () => {
        const store = [
            ["envelope", 1],
            ["pencil", 10],
            ["paper", 5],
            ["axe", 5],
        ] as [string, number][]
        const currentBasket = ["pencil"]
        const output = recommend(store, currentBasket)
        const expected = "paper"

        expect(output).toEqual(expected)
    })
})
