const kthDistinct = function (arr, k) {
  const obj = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Object.hasOwn(obj, arr[i])) obj[arr[i]]++;
    else obj[arr[i]] = 1;
  }

  for (let key in obj) {
    if (obj[key] === 1) result.push(key);
  }

  const final = result.map((item) => {
    return { key: item, pos: arr.indexOf(item) };
  });
  return final.length < k ? "" : final[k - 1].key;
};
