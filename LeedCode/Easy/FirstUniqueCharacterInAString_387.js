function firstUniqChar(s) {
  const strMap = {};

  for (let i = 0; i < s.length; i++) {
    let obj = {};

    if (Object.hasOwn(strMap, s[i])) {
      strMap[s[i]].count += 1;
    } else {
      obj["count"] = 1;
      obj["postion"] = i;
      strMap[s[i]] = obj;
    }
  }

  let firstPostion = [];

  for (let key in strMap) {
    if (strMap[key].count === 1) {
      firstPostion.push(strMap[key].postion);
    }
  }
  return firstPostion.length === 0 ? -1 : Math.min(...firstPostion);
}

console.log(firstUniqChar("aabb"));
