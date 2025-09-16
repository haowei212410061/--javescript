const moveZeroes = function (nums) {
    let position = 0


    // 用一個position指針 指向所有非0的元素
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[position] = nums[i]
            position++
        }

    }


    //最後補0
    while (position < nums.length) {
        nums[position] = 0
        position++
    }

    return nums
};