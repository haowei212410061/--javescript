function containsNearbyDuplicate (nums, k) {
    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        if (Object.hasOwn(obj, nums[i])) {
            obj[nums[i]].push(i);
        } else {
            obj[nums[i]] = [i];
        }
    }

    for (let key in obj) {
        if (obj[key].length > 1) {
            let index = 1;
            for (let i = 0; i < obj[key].length; i++) {
                if (obj[key][index] - obj[key][i] <= k) return true;
                else index++;
            }
        }
    }
    return false;
};