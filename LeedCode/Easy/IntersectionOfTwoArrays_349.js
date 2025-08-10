function intersection(nums1, nums2) {
  const thisSet = new Set(nums1, nums2);
  const result = new Set();

  //   for(let i = 0 ; i < thisSet.size ; i++){

  //   }

  thisSet.forEach((item) => {
    if (nums1.includes(item) && nums2.includes(item)) {
      result.add(item);
    }
  });
  return [...result];
}

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
