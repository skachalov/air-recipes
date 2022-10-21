/**
 * @desc Convert seconds to minutes or hours
 * @param {number} time - seconds
 * @returns {string} - a string representing time in minutes or hours
 */

export default function formatTime(time) {
    return time / 60 <= 60
        ? `${formatNumber(time / 60)} min`
        : `${formatNumber(time / 60 / 60)} hours`
}

/**
 * @desc Rounding a number to one decimal place if it is not an integer
 * @param {number} number - number to round
 * @returns {number} - converted number
 */

function formatNumber(number) {
    return Number.isInteger(number)
        ? number
        : number.toFixed(1)
}