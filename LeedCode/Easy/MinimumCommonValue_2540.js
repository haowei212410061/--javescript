const getCommon = function (nums1, nums2) {
    let key1 = 0, key2 = 0;
    const arr1 = nums1.sort((a, b) => a - b)
    const arr2 = nums2.sort((a, b) => a - b)

    while (key1 < arr1.length && key2 < arr2.length) {
        if (arr1[key1] === arr2[key2]) return arr2[key2]
        else if (arr1[key1] < arr2[key2]) key1++
        else key2++
    }
    return -1

};