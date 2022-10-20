/**
 * Преобразование первой буквы строки в заглавную
 * @param {string} word - строка для проебразования
 * @returns {string} - преобразованная строка word с заглавной первой буквой
*/
export function firstLetterToUpper(word) {
    return word[0].toUpperCase() + word.slice(1)
}