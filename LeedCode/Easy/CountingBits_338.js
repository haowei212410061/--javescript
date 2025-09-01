function CountingBits(n) {
  let count = 0;
  let result = [];
  while (count <= n) {
    if (count === 0) result.push(0);
    else if (count === 1) result.push(1);
    else {
      const length = count
        .toString(2)
        .split("")
        .filter((item) => item === "1").length;
      result.push(length);
    }
    count++;
  }
  return result;
}
