/**
 * @param {number[]} nums
 * @return {boolean}
 */

//解法1:線性搜尋(性能較差 執行時間:103ms) 
//一開始用mergeSort()把陣列按照升序排列 
//循環排序好的陣列 檢查arr[i] and arr[i+1]的值是否相同 相同的話return true

//解法2:map(性能較好 執行時間:13ms) 
//在循環中檢查map是否包含陣列的元素 有的話return true 沒有的話就把元素加入到map內


var containsDuplicate = function(nums) {
    let map = new Map()
    for(let i = 0 ; i < nums.length ; i++){
        if(map.has(nums[i])){
            return true
        }else{
            map.set(nums[i],1)
        }
    }
    return false
};

function merge(left,right){
    let result = []
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length){
        if(left[i] > right[j]){
            result.push(right[j])
            j++
        }else{
            result.push(left[i])
            i++
        }
    }

    while(i < left.length){
        result.push(left[i])
        i++
    }
    while(j < right.length){
        result.push(right[j])
        j++
    }

    return result
}

function mergeSort(arr){
    if(arr.length === 1)return arr
    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)
    return merge(mergeSort(left),mergeSort(right))
}
