function BinarySearch(nums,target){
    if (nums.length === 1 && nums[0] === target) return 0

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2)

        if (nums[middle] > target) {
            right = middle - 1
        } else if (nums[middle] < target) {
            left = middle + 1
        } else if (nums[middle] === target) return middle
    }
    return -1
}