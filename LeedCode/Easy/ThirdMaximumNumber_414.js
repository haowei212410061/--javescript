function thirdMax(nums){
    let result = [...new Set(nums)] // 去掉重複值
    if (result.length < 3) return Math.max(...result)
    let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity
    for (let i = 0; i < result.length; i++) {
        if (result[i] > max1) { [max1, max2, max3] = [result[i], max1, max2] }
        else if (result[i] > max2) { [max2, max3] = [result[i], max2] }
        else if (result[i] > max3) { max3 = result[i] }
    }
    return max3
}