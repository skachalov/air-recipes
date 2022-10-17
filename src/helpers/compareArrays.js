export function compareArrays(arr1, arr2) {
    return arr1.filter(el => arr2.indexOf(el) !== -1).length === arr2.length
}