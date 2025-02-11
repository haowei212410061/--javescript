/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //只能修改原陣列 
    //利用快慢雙指針 檢查陣列中的重複項
    //情況1. nums[slow] === nums[fast]:跳過
    //情況2. nums[slow] !== nums[fast]:那slow就先前進一格再進行修改 nums[slow] = nums[fast]
    //不論上述哪種情況 最後fast都要前進一格
    //適用於已排序好的陣列以及在只能修改原陣列的情況下
    let k = 0;
    let slow = 0;
    let fast = 1;
    for(let i = 0 ; i<nums.length ; i++){
        if(nums[fast] !== nums[slow]){
            slow++
            nums[slow]=nums[fast]
            fast++
            k++
        }else{
            fast++
        }
        continue
    }
    return k
};