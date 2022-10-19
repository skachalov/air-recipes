import { cutWord } from "../helpers/cutWord";

describe('Cut word', () => {
    test.each([
        { input: ["a".repeat(200)], expected: "a".repeat(170) + "...", name: "Function with string longer than default len return correct string" },
        { input: ["a".repeat(100)], expected: "a".repeat(100), name: "Function with string shorter than default len return correct string" },
        { input: ["a".repeat(170)], expected: "a".repeat(170), name: "Function with string which has the same length as default len return correct string" },
        { input: ["a".repeat(171)], expected: "a".repeat(170) + "...", name: "Function with string longer by one than default len return correct string" },
        { input: ["a".repeat(171)], expected: "a".repeat(170) + "...", name: "Function with string longer by one than default len return correct string" },
        { input: ["a".repeat(100), 30], expected: "a".repeat(30) + "...", name: "Function with user len param return correct string" },
        { input: [""], expected: "", name: "Function with empty string return empty string" },
    ])("$name", ({ input, expected }) => {
        expect(cutWord(...input)).toBe(expected)
    })
})