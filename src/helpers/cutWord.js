export function cutWord(word, len = 170) {
    return word.length > len
        ? word.slice(0, len) + '...'
        : word
}