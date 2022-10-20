import { compareArrays } from "../../helpers/compareArrays";

describe('Compare arrays', () => {
    test.each([
        { input: [[4, 8, 15, 16, 23, 42], [4, 8, 15, 16, 23, 42]], expected: true, name: "Function with same arrays returns true" },
        { input: [[4, 8, 15, 16, 23, 42], [16, 42, 15, 4, 23, 8]], expected: true, name: "Function with arrays with shuffled same values returns true" },
        { input: [[4, 8, 15, 16, 23, 42], [1, 2, 3]], expected: false, name: "Function with completely different arrays returns true" },
        { input: [[4, 4], [4, 4]], expected: true, name: "Function with same arrays with duplicates returns true" },
        { input: [[], []], expected: true, name: "Function with empty arrays arrays returns true" },
        { input: [[4, 8, 15, 16, 23, 42], [4, 8, 16, 23]], expected: false, name: "Function with arrays which different but have common values returns false" },
        { input: [[4, 4, 4, 4], [4, 4, 4]], expected: false, name: "Function with different arrays with duplicates returns false" },
        { input: [[4], []], expected: false, name: "Function with one empty array returns false" },
    ])("$name", ({ input, expected }) => {
        expect(compareArrays(...input)).toBe(expected)
    })
})