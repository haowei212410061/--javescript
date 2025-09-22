/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
    let obj1 = new Map()
    let obj2 = new Map()

    for (let key in ransomNote) {
        if (obj1.has(ransomNote[key])) {
            let value = obj1.get(ransomNote[key])
            value++
            obj1.set(ransomNote[key], value)
        }
        else obj1.set(ransomNote[key], 1)
    }

    for (let key in magazine) {
        if (obj2.has(magazine[key])) {
            let value = obj2.get(magazine[key])
            value++
            obj2.set(magazine[key], value)
        }
        else obj2.set(magazine[key], 1)
    }
    for (let [key, count] of obj1.entries()) {
        if (obj2.has(key)) {
            if (obj2.get(key) === count) continue
            else if (obj2.get(key) < count) return false
        } else {
            return false
        }
    }

    return true
};