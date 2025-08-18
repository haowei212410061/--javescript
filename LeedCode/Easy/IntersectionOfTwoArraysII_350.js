function intersect(nums1, nums2) {
  const objOfnums1 = {};
  const objOfnums2 = {};
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    if (Object.hasOwn(objOfnums1, nums1[i])) {
      objOfnums1[nums1[i]]++;
    } else {
      objOfnums1[nums1[i]] = 1;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (Object.hasOwn(objOfnums2, nums2[i])) {
      objOfnums2[nums2[i]]++;
    } else {
      objOfnums2[nums2[i]] = 1;
    }
  }

  for (let key in objOfnums1) {
    if (Object.hasOwn(objOfnums2, key) && objOfnums1[key] === objOfnums2[key]) {
      for (let i = 0; i < objOfnums1[key]; i++) {
        result.push(Number(key));
      }
    } else if (
      Object.hasOwn(objOfnums2, key) &&
      objOfnums1[key] !== objOfnums2[key]
    ) {
      for (let i = 0; i < Math.min(objOfnums1[key], objOfnums2[key]); i++) {
        result.push(Number(key));
      }
    }
  }
  return result
}

console.log(intersect([1, 2, 2, 1], [2]));
