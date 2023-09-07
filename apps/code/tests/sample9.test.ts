// Mazes can be loads of fun ... but only if a possible route actually exists. Your job is to write a function that determines whether it's possible to get from a starting point to a predetermined destination for a given maze.

// The maze itself is a two-dimensional array, consisting of ones (signifying barriers) and zeros (signifying open space).

// Example Maze #1:

// [
//     [1, 0, 0, 1, 1],
//     [1, 1, 0, 1, 1],
//     [1, 0, 0, 1, 1],
//     [1, 0, 1, 1, 0],
//     [1, 0, 0, 0, 0],
// ]
// You'll receive starting and destination coordinates in as (row, column) notation. This means (0, 2) in the example maze is middle cell in the top row, because the row is 0 and the column is 2. The start and destination coordinates will always have a value of 0.

// Your function will determine whether it is possible to get from the starting coordinate to the destination coordinate by only moving across 0-valued cells.

// Looking at our example maze again, let's assume that start = (0, 1) and dest = (4, 3). Here's the same maze, but this time the valid path is marked by replacing the 0 value with an asterisk (*).

// [
//     [1, *, *, 1, 1],
//     [1, 1, *, 1, 1],
//     [1, *, *, 1, 1],
//     [1, *, 1, 1, 0],
//     [1, *, *, *, 0],
// ]
// Because it's possible to get from the start to the destination by touching only zeros, your function should return true.

// Let's try an example where it isn't possible to get from the start to the destination.

// Example Maze #2:

// [
//     [1, 0, 0, 1],
//     [1, 1, 0, 1],
//     [0, 1, 0, 1],
// ]
// For this maze start = (2, 0) and dest = (0, 1). Given that the starting cell is entirely surrounded by ones, this maze isn't possible to complete.

// [
//     [1, 0, 0, 1],
//     [1, 1, 0, 1],
//     [*, 1, 0, 1],
// ]
// Allowed moves:

// The only moves allowed are up, down, left, and right. Diagonals are not allowed. For the maze diagram below, assume you're starting on the cell labeled E.

// [
//     [A, B, C],
//     [D, E, F],
//     [G, H, J],
// ]
// Starting at E, the valid moves are E -> B, E -> F, E -> H, and E -> D.

// export const solution = (messages) => {
//     class Emitter {
//         constructor(messages = []) {
//             this.messages = messages;
//             this.event = () => { };
//         }

//         setEvent(fn) {
//             this.event = fn;
//         }

//         trigger() {
//             this.messages.forEach(message => this.event(message));
//         }
//     }

//     class Receiver {
//         constructor() {
//             this.messages = [];
//         }

//         ping = (message) => {
//             this.messages.push(message);
//         }
//     }

//     const myEmitter = new Emitter(messages);
//     const myReceiver = new Receiver();

//     myEmitter.setEvent(myReceiver.ping);
//     myEmitter.trigger();

//     return myReceiver.messages;
// };

export const solution = (
    maze: number[][],
    startRow: number,
    startCol: number,
    destRow: number,
    destCol: number,
) => {
    const numbRow = maze.length
    const numbColumn = maze[0].length
    const visited = new Set()

    const dfs = (row, col) => {
        if (row < 0 || row >= numbRow || col < 0 || col >= numbColumn) {
            return false
        }

        if (maze[row][col] === 1) {
            return false
        }

        if (row === destRow && col === destCol) {
            return true
        }

        const key = `${row}-${col}`
        if (visited.has(key)) {
            return false
        }
        visited.add(key)

        return (
            dfs(row - 1, col) ||
            dfs(row + 1, col) ||
            dfs(row, col - 1) ||
            dfs(row, col + 1)
        )
    }

    return dfs(startRow, startCol)
}

describe("solution", () => {
    it("should work first case", () => {
        expect(
            solution(
                [
                    [0, 1],
                    [1, 0],
                ],
                0,
                0,
                1,
                1,
            ),
        ).toEqual(false)
    })

    it("should work second case", () => {
        expect(
            solution(
                [
                    [0, 0],
                    [1, 0],
                ],
                0,
                0,
                1,
                1,
            ),
        ).toEqual(true)
    })

    it("should work third case", () => {
        expect(
            solution(
                [
                    [1, 0, 0, 1, 1],
                    [1, 1, 0, 1, 1],
                    [1, 0, 0, 1, 1],
                    [1, 0, 1, 1, 0],
                    [1, 0, 0, 0, 0],
                ],
                0,
                1,
                3,
                4,
            ),
        ).toEqual(true)
    })

    it("should work fourth case", () => {
        expect(
            solution(
                [
                    [1, 0, 0, 1, 1],
                    [1, 1, 0, 1, 1],
                    [1, 0, 0, 1, 1],
                    [1, 0, 1, 1, 0],
                    [1, 0, 0, 0, 1],
                ],
                0,
                1,
                3,
                4,
            ),
        ).toEqual(false)
    })
})
