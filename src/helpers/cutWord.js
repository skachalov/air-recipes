/**
 * Обрезание слова до указанной длины
 * @param {string} word - слово, которое надо обрезать
 * @param {number} len - количество символов, которое надо оставить в строке
 * @returns {string} - обрезанная строка word до длины len
 */

export function cutWord(word, len = 170) {
    return word.length > len
        ? word.slice(0, len) + '...'
        : word
}