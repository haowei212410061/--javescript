const nextGreaterElement = function (nums1, nums2) {
    let result = []
    for (let key of nums1) {
        let index = nums2.indexOf(key)
        let found = -1
        console.log('nums1 element in nums2 index : ', index)

        for (let i = index + 1; i < nums2.length; i++) {
            if (nums2[i] > key) {
                found = nums2[i]
                break
            }

        }
        result.push(found)
    }
    return result
};