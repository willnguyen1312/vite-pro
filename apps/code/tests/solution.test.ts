// Write the function that generate top 5 words appeared in the string
// Minimum word length 4
// Case insensitive
// For instance: With the above string, the result should be top 5 words with their according occurrences
export function solution(input: string) {
  // const result = [...input.matchAll(new RegExp(/[a-z]+/, 'ig'))].map(t => t[0]).filter(t => t.length > 3)
  // console.log(result);
  // const normalizedInput = input.toLowerCase().replace(",", "")
  // const words = normalizedInput.split(" ").filter(word => word.length > 3)
  // const lookup = new Map<string, number>()
  // for (const word of words) {
  //     if (lookup.has(word)) {
  //         lookup.set(word, lookup.get(word) + 1)
  //     } else {
  //         lookup.set(word, 1)
  //     }
  // }
  // const wordsSortedByOccurrences = [...lookup.entries()].sort((first, second) => second[1] - first[1])
  // return wordsSortedByOccurrences.slice(0, 5)
}

// Time complexity analysis:
// O(4n + nlogn)

// Space complexity analysis:
// O(1n + 1n + 1n)

// Max Stack O(1)

// Step 1 - Sample str: "Hello world hello" -> ["hello", "world", "hello"]
// Step 2 - Lookup => const lookup = { hello: 2, world: 1 }
// Step 3 - Extract out the result from lookup and return the result

// Step 1: Split the str to array of word without space, comma and is valid word (Minimum word length 4) in lower case
// Step 2: Loop through the array of word and count the occurrences of them and store inside a lookup
// Step 3: Extract out the top 5 words with their according occurrences
// Final step: return the result

describe("solution", () => {
  it("should work as expected", () => {
    const input =
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc";

    const output = solution(input);

    // expect(output).toMatchInlineSnapshot(`
    //   [
    //     [
    //       "lorem",
    //       5,
    //     ],
    //     [
    //       "ipsum",
    //       4,
    //     ],
    //     [
    //       "there",
    //       2,
    //     ],
    //     [
    //       "injected",
    //       2,
    //     ],
    //     [
    //       "humour,",
    //       2,
    //     ],
    //   ]
    // `)
  });
});
