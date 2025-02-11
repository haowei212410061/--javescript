/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = firstElementBinarySearch(nums,target)
    let last = LastElementBinarySearch(nums,target)
    if(first === -1 && last === -1){
        return [-1,-1]
    }else if(first === -1 && last !== -1){
        return [last,last]
    }else if(first !== -1 && last === -1){
        return [first,first]
    }else{
        return [first,last]
    }
    
};

//尋找目標元素再陣列中最靠前的位置 類似於indexOf()的效果
function firstElementBinarySearch(arr,target){
    let start = 0;
    let end = arr.length - 1;
    let result = -1;
    while(start <= end){
        let middle = Math.floor((start+end)/2)
        if(arr[middle] > target){
            end = middle - 1
        }else if(arr[middle] < target){
            start = middle + 1
        }else if(arr[middle] === target){

            //找到目標元素後 再繼續往前尋找
            result = middle
            end --
        }
    }
    return result
}
//尋找目標元素再陣列中最靠後的位置 類似於LastIndexOf()的效果
function LastElementBinarySearch(arr,target){
    let start = 0;
    let end = arr.length - 1;
    let result = -1;
    while(start <= end){
        let middle = Math.floor((start+end)/2)
        if(arr[middle] > target){
            end = middle - 1
        }else if(arr[middle] < target){
            start = middle + 1
        }else if(arr[middle] === target){
            //找到目標元素後 再繼續往後尋找
            result = middle
            start ++
        }
    }
    return result
}