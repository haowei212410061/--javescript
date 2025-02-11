/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    //如果陣列內的元素等於val 那k就不往前走
    let k = 0 ;
    for(let i = 0 ; i < nums.length;i++){
         if(nums[i] !== val){
            nums[k] = nums[i]
            k++
        }
    }
    return k
};