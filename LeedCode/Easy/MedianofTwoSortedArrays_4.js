/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/**最初想法 */
//一開始是想用類似於mergeArray function的作法 一邊合併 一邊排序
//但是後來發現 如果有剩餘的元素 會沒辦法放在正確的位置上

/*
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length === 0){
        if(nums2.length % 2 === 0){
            const middle = nums2.length / 2
            return parseFloat((nums2[middle]+nums2[middle-1])/2)
        }
        if(nums2.length % 2 !== 0){
            const middle = Math.floor(nums2.length / 2)
            return nums2[middle]
        }
    }
    if(nums2.length === 0){
        if(nums1.length % 2 === 0){
            const middle = nums1.length / 2
            return parseFloat((nums1[middle]+nums1[middle-1])/2)
        }
        if(nums1.length % 2 !== 0){
            const middle = Math.floor(nums1.length / 2)
            return nums[middle]
        }
    }
    let result = []
    let minLength = Math.min(nums1.length,nums2.length)
    for(let i = 0 ; i < minLength; i++){
        if(nums1[i] > nums2[i]){
            result.push(nums2[i])
            result.push(nums1[i])
        }else{
            result.push(nums1[i])
            result.push(nums2[i])
        }
    }
    
    if(nums1.length - minLength !== 0){
        const arr = nums1.slice(nums1.length - minLength)
        result = [...result,...arr]

    }
    if(nums2.length - minLength !== 0){
        const arr = nums2.slice(nums2.length - minLength)
        result = [...result,...arr]
    }
    if(result.length % 2 === 0){
        const middle = result.length / 2
        return parseFloat((result[middle]+result[middle-1])/2)
    }
    if(result.length % 2 !== 0){
        const middle = Math.floor(result.length / 2)
        return result[middle]
    }
};*/



/**解答 */
//先合併兩個陣列之後 再進行排序
//了解merge sort的作用原理
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1,...nums2]
    let result = mergeSort(arr)
    if(result.length % 2 === 0){
        let middle = Math.floor(result.length /2)
        return Math.floor((result[middle] + result[middle-1])/2)
    }else{
        let middle = Math.floor(result.length /2)
        return result[middle]
    }
};

console.log(findMedianSortedArrays([2,2,4,4],[2,2,2,4,4]))

function mergeArray(arr1,arr2){
    let result = []
    let i = 0 ; 
    let j = 0 ;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        result.push(arr2[j])
        j++
    }

    return result
}

function mergeSort(arr){
    if(arr.length === 1)return arr
    let middle = Math.floor(arr.length /2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)
    return mergeArray(mergeSort(left),mergeSort(right))
}