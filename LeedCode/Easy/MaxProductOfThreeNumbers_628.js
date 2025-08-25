var maximumProduct = function (nums) {
    let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity; // 前三大
    let min1 = Infinity, min2 = Infinity;                   // 最小兩個

    for (const x of nums) {
        // 更新前三大
        if (x > max1) { [max3, max2, max1] = [max2, max1, x]; }
        else if (x > max2) { [max3, max2] = [max2, x]; }
        else if (x > max3) { max3 = x; }

        // 更新最小兩個
        if (x < min1) { [min2, min1] = [min1, x]; }
        else if (x < min2) { min2 = x; }
    }

    return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};