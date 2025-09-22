function findDisappearedNumbers(nums) {
  let set1 = new Set();
  let set2 = new Set(nums);
  let result = [];
  for (let i = 1; i <= nums.length; i++) set1.add(i);
  for (let key of set1) if (!set2.has(key)) result.push(key);
  return result;
}
