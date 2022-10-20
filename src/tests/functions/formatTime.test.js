import formatTime from "../../helpers/formatTime"

describe('Format time', () => {
    test.each([
        { input: 30 * 60, expected: "30 min", name: "Function with input 1800 returns 30 min" },
        { input: 60 * 60, expected: "60 min", name: "Function with input 3600 returns 60 min" },
        { input: 0, expected: "0 min", name: "Function with input 0 returns 0 min" },
        { input: 59 * 60, expected: "59 min", name: "Function with input 3540 returns 59 min" },
        { input: 61 * 60, expected: "1.0 hours", name: "Function with input 3660 returns 1.0 hours" },
        { input: 125 * 60, expected: "2.1 hours", name: "Function with input 7500 returns 2.1 hours" },
    ])("$name", ({ input, expected }) => {
        expect(formatTime(input)).toBe(expected)
    })
})