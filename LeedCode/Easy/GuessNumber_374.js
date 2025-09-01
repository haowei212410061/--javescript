function guessNumber(n){
    let left = 1, right = n;

    // 主要使用二分搜尋 每次都取中間值 判斷大小 然後往左邊或右邊走
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const res = guess(mid); // 這個guess是leetcode給的function 
        if (res === 0) return mid;
        if (res === -1) right = mid - 1;
        else left = mid + 1;
    }
    return -1;
}