/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //用hashMap查詢速度較快
    const map = new Map();
    for(i = 0 ; i<nums.length ; i++){
        let num = target - nums[i]
        if(map.has(num)){
            return [map.get(num),i]
        }else{
            map.set(nums[i],i)
        }
    }
};
