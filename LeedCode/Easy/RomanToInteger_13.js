function RomanTOInteger(str) {
  const NormalObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const instancesObj = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let normalArray = [];
  let instancesArray = [];

  for (let i = 0; i < str.length; i++) {
    // matchValue用於篩選在instancesObj物件裡的字串
    let matchValue = str.slice(i, i + 2);

    // 符合的話就放進instances陣列內 並且i指針要往前走一格避免放入重複的字串
    // 不符合則視為普通字串
    if (Object.hasOwn(instancesObj, matchValue)) {
      instancesArray.push(matchValue);
      i = i + 1;
    } else normalArray.push(str[i]);
  }

  return [
    ...instancesArray.map((value) => instancesObj[value]),
    ...normalArray.map((value) => NormalObj[value]),
  ].reduce((total, num) => total + num, 0);
}


