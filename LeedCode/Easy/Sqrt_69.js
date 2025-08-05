function SearchSqrt(value) {
  let left = 0; //陣列的開頭
  let right = value; //陣列的結尾
  while (left <= right) {
    let middle = Math.floor((left + right) / 2); //陣列的中間值

    console.log("left / right / middle : ", [left, right, middle]);
    if (middle * middle === value) return middle;
    else if (middle * middle > value) {
      right = middle - 1;
    } //判斷陣列中間值是否大於要查詢的值 如果是 則陣列索引往右移動
    else if (middle * middle < value) {
      left = middle + 1;
    } //判斷陣列中間值是否小於要查詢的值 如果是 則陣列索引往左移動
  }
  return right;
}

console.log(SearchSqrt(4));