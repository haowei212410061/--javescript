/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
function findRestaurant (list1, list2) {
    const map1 = new Map()
    let min = Infinity;
    let result = []
    for (let index = 0; index < list1.length; index++) { map1.set(list1[index], index) }

    for (let key = 0; key < list2.length; key++) {
        if (map1.has(list2[key])) {
            const sum = key + map1.get(list2[key])

            // 比min更小 就清空result 
            if (sum < min) {
                result = [list2[key]]
                min = sum
            } else if (sum === min) {
                result.push(list2[key])
            }
        }
    }
    return result
};