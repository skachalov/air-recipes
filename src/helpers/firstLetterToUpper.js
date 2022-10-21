/**
 * @desc Converting the first letter of a string to upper
 * @param {string} word - string to convert
 * @returns {string} - converted string word with upper first letter
*/
export function firstLetterToUpper(word) {
    return word[0].toUpperCase() + word.slice(1)
}