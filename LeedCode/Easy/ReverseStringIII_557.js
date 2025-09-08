function reverseItem(str) {
    let start = 0;
    let end = str.length - 1;
    let arr = str.split('')

    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
    return arr.join('')
}

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(words) {
    let arr = words.split(' ')
    let result = []

    for (let i = 0; i < arr.length; i++) {
        result.push(reverseItem(arr[i]))
    }
    return result.join(' ')
}