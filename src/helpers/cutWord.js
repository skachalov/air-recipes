/**
 * @desc Truncate a word to a specified length
 * @param {string} word - word to cut
 * @param {number} len - the number of symbols to be left in the string
 * @returns {string} - truncated string word to length len
 */

export function cutWord(word, len = 170) {
    return word.length > len
        ? word.slice(0, len) + '...'
        : word
}