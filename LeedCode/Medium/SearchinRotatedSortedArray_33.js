/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let pivot = 0;
    
    //找到樞紐位置
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i+1]<nums[i]){
            pivot = i+1
            break
        }
    }
    if(pivot !== 0){
       //檢查target是在樞紐的左半邊還是右半邊
       if(nums[pivot] === target){
            return pivot
       }

       //把原陣列切成左右兩邊 然後執行二分搜尋
        const leftArr = nums.slice(0,pivot);
        const rightArr = nums.slice(pivot);
        const resultL = binarySearch(leftArr,target)
        const resultR = binarySearch(rightArr,target)

        //如果target再右邊的陣列 要記得加上左邊陣列的長度 才會等於原陣列的位置
        if(resultL === -1 && resultR === -1)return -1
        if(resultL !== -1)return resultL
        if(resultR !== -1)return resultR+leftArr.length
    }else{
        return binarySearch(nums,target)
    }    
};

function binarySearch(sortedArr,target){
    let start = 0;
    let end = sortedArr.length - 1

    while(start <= end){
        let middle = Math.floor((start + end)/2)
        if(sortedArr[middle] > target){
            end = middle - 1
        }else if(sortedArr[middle] < target){
            start = middle + 1
        }else{
            return middle
        }
    }
    return -1
}