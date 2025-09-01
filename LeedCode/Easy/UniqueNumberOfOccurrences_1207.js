function uniqueOccurrences(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (Object.hasOwn(obj, arr[i])) obj[arr[i]]++;
    else obj[arr[i]] = 1;
  }

  return Object.values(obj).length === new Set(Object.values(obj)).size;
}
