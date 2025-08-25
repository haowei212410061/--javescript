function wordPattern(pattern, s) {
  let obj1 = {};
  let obj2 = {};

  const strings = pattern.split("");
  const strings2 = s.split(" ");

  for (let x = 0; x < strings.length; x++) {
    if (Object.hasOwn(obj1, strings[x])) continue;
    else obj1[strings[x]] = x;
  }

  for (let y = 0; y < strings2.length; y++) {
    if (Object.hasOwn(obj2, strings2[y])) continue;
    else obj2[strings2[y]] = y;
  }

  for (let key in obj1) {
    for (let str1 = 0; str1 < strings.length; str1++) {
      if (key === strings[str1]) strings[str1] = String(obj1[key]);
    }
  }

  for (let key in obj2) {
    for (let str2 = 0; str2 < strings2.length; str2++) {
      if (key === strings2[str2]) strings2[str2] = String(obj2[key]);
    }
  }

  return strings.join(",") === strings2.join(",");
}
