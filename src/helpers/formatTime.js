/**
 * Преобразование секунд в минуты или часы
 * @param {number} time - секунды
 * @returns {string} - строка с представлением time в минутах или часах
 */

export default function formatTime(time) {
    return time / 60 <= 60
        ? `${formatNumber(time / 60)} min`
        : `${formatNumber(time / 60 / 60)} hours`
}

/**
 * Округление числа до одного знака после запятой, если оно не является целым
 * @param {number} number - число для округления
 * @returns {number} - преобразованное число number
 */

function formatNumber(number) {
    return Number.isInteger(number)
        ? number
        : number.toFixed(1)
}