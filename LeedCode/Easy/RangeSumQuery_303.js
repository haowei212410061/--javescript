/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefixSum = [0]
    this.nums = nums
    for(let i = 0 ; i < nums.length ;i ++){
        this.prefixSum.push(this.prefixSum[i]+nums[i])
    }
};

/** 
* @param {number} left 
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function(left, right) {
let sum = 0
return this.prefixSum[right+1] - this.prefixSum[left]
};

/** 
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/