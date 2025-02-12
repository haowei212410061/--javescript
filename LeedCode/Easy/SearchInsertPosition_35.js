/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//1. 先利用二分搜尋查找目標元素 如果有找到 直接返回該目標再陣列內的位置
//2. 如果目標不在陣列內 就把目標元素push到原陣列的最後一個位置
//3. 利用merge sort把陣列做成升序排列
//4. 再次利用二分搜尋找到目標元素的位置
var searchInsert = function(nums, target) {
    const exist = binarySearch(nums,target)
    if(exist === -1){
        let resultA = [...nums,target]
        const arr = mergeSort(resultA)
        const index = binarySearch(arr,target)
        return index
        
    }else{
        return exist
    }
};

function binarySearch(arr,target){
    let start = 0;
    let end = arr.length - 1
    while(start <= end){
        let middle = Math.floor((start + end)/2)
        if(arr[middle] > target){
            end = middle - 1
        }else if(arr[middle] < target){
            start = middle + 1
        }else if(arr[middle] === target){
            return middle
        }
    }
    return -1
}

function merge(arr1,arr2){
    let result = []
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length){
        if(arr1[i] > arr2[j]){
            result.push(arr2[j])
            j++
        }else {
            result.push(arr1[i])
            i++
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
    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)

    return merge(mergeSort(left),mergeSort(right))
}

console.log(searchInsert([1,3,5,6],2))