function hammingWeight(n) {
  return n
    .toString(2)
    .split("")
    .filter((str) => str === "1").length;
}
