import { firstLetterToUpper } from "../../helpers/firstLetterToUpper";

describe('First letter to upper', () => {
    test.each([
        { input: "text", expected: "Text", name: "Function with input text returns Text" },
        { input: "Text", expected: "Text", name: "Function with input Text returns Text" },
        { input: "a", expected: "A", name: "Function with input a returns A" },
    ])("$name", ({ input, expected }) => {
        expect(firstLetterToUpper(input)).toBe(expected)
    })
})