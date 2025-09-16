const numOfUnplacedFruits = function (fruits, baskets) {
  const basket = baskets.map((item) => {
    return { key: item, active: false };
  });
  let left = 0,
    right = 0;
  while (left < fruits.length) {
    while (right < basket.length) {
      if (fruits[left] <= basket[right].key && basket[right].active === false) {
        basket[right].active = true;
        right = 0;
        break;
      } else {
        right++;
      }
    }
    right = 0;
    left++;
  }
  return basket.filter((item) => item.active === false).length;
};
