/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words) {
    const set1 = new Set('qwertyuiop')
    const set2 = new Set('asdfghjkl')
    const set3 = new Set('zxcvbnm')

    let count = []
    let res = []

    for (let key of words) {
        let isWord = true
        let str = key.toLowerCase()
        for (let i = 0; i < key.length; i++) {
            if (set1.has(str[i])) {
                count.push(1)
                let index = count.length - 1;
                if (index !== 0) {
                    if (count[index] === count[index - 1]) isWord = true
                    else {
                        isWord = false
                        break
                    }
                } else {
                    isWord = true
                }
            }
            else if (set2.has(str[i])) {
                count.push(2)
                let index = count.length - 1;
                if (index !== 0) {
                    if (count[index] === count[index - 1]) isWord = true
                    else {
                        isWord = false
                        break
                    }
                } else {
                    isWord = true
                }
            }
            else if (set3.has(str[i])) {
                count.push(3)
                let index = count.length - 1;
                if (index !== 0) {
                    if (count[index] === count[index - 1]) isWord = true
                    else {
                        isWord = false
                        break
                    }
                } else {
                    isWord = true
                }
            }
        }
        if (isWord) res.push(key)
        count = []
    }
    return res
};