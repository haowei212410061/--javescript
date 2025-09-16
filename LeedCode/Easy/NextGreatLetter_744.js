/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function (letters, target) {
    let min = Infinity;
    let result = letters[0]
    for (let i = 0; i < letters.length; i++) {
        let code = letters[i].charCodeAt()
        if (code > target.charCodeAt() && code < min) {
            min = code
            result = letters[i]
        }
    }

    return result
};