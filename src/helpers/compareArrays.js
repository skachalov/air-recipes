/**
 * @desc Comparing two arrays
 * @param {array} arr1 - first array
 * @param {array} arr2 - second array
 * @returns {boolean} - result of comparing arrays arr1 and arr2
 */

export function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length
        && arr1.filter(el => arr2.indexOf(el) !== -1).length === arr2.length
}