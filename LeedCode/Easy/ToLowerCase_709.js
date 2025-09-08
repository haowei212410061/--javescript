/**
 * @param {string} s
 * @return {string}
 */
function toLowerCase(str) {
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    const map = {};
    const arr = str.split('')

    for (let i = 0; i < lower.length; i++) { map[upper[i]] = lower[i] }
    for (let i = 0; i < arr.length; i++) {
        if (Object.hasOwn(map, arr[i])) arr[i] = map[arr[i]]
    }
    return arr.join('')
};