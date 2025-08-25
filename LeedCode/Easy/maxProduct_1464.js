var maxProduct = function (nums) {
  let max1 = -Infinity,
    max2 = -Infinity;

  for (let x of nums) {
    if (x > max1) {
      [max1, max2] = [x, max1];
    } else if (x > max2) {
      max2 = x;
    }
  }

  return (max1 - 1) * (max2 - 1);
};
