/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumCount = function (nums) {
    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) count2++;
        else if (nums[i] > 0) count1++
    }

    return Math.max(count1, count2)
};