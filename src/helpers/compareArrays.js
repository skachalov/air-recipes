/**
 * Сравнение двух массивов
 * @param {array} arr1 - первый массив
 * @param {array} arr2 - второй массив
 * @returns {boolean} - результат сравнения массивов arr1 и arr2
 */

export function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length
        && arr1.filter(el => arr2.indexOf(el) !== -1).length === arr2.length
}