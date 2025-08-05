function MergeSortedArray(nums1, m, nums2, n) {
  if (m === 0) {
    for (let i = 0; i < nums2.length; i++) {
      nums1.push(nums2[i]);
    }
  }
  if (n === 0) return;

  //
  let j = 0;

  for (let i = m; i <= m + n - 1; i++) {
    nums1[i] = nums2[j];
    j++;
  }

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      if (nums1[i] < nums1[j]) {
        const tmp = nums1[i];
        nums1[i] = nums1[j];
        nums1[j] = tmp;
      }
    }
  }
  return nums1;
}

console.log(MergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

function MergeSortedArray1(nums1, m, nums2, n) {
  if (m === 0) {
    for (let i = 0; i < nums2.length; i++) {
      nums1[i] = nums2[i];
    }
  }
  if (n === 0) return;

  // 指向最後一個值是因為 最後一個值是最大的 從最大往最小排序 所以從陣列末端開始排序
  let i = m - 1; // 指向nums1的最後一個有效值
  let j = n - 1; // 指向nums2的最後一個值
  let k = m + n - 1; // 整體nums1陣列長度

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  return nums1;
}

// 先合併 再用泡沫排序法
console.log(
  "泡沫排序 : ",
  MergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
);

// 邊合併 邊排序
console.log(
  "合併排序 : ",
  MergeSortedArray1([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
);
