const targetIndices = function (nums, target) {
    let arr = nums.sort((a, b) => a - b)
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        if (arr[i] === target) ans.push(i)
    }
    return ans

};