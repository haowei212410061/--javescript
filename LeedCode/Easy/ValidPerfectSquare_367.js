function isPerfectSquare(num) {
  let left = 1;
  let right = num;

  // 用二分搜尋

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const sqrt = middle * middle;
    if (sqrt === num) return true;
    else if (sqrt > num) right = middle - 1;
    else if (sqrt < num) left = middle + 1;
  }
  return false;
}
