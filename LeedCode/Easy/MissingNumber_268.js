/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let length = nums.length
    let sum = (length * (length + 1)) / 2  //自然數求和公式
    for(let i = 0 ; i < length ; i++){
        sum -= nums[i]
    }
    return sum
};

var NumArray = function(nums) {
   this.nums = nums

};

NumArray.prototype.sum = function(left){
    return this.slice(left)
}