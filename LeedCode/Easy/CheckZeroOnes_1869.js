function checkZeroOnes(s) {
  let s1 = s.split("0");
  let s2 = s.split("1");

  let length1 = Math.max(...s1.map((str) => str.length));
  let length2 = Math.max(...s2.map((str) => str.length));

  return length1 > length2;
}
