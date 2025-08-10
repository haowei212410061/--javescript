function addDigits(num) {
  if (String(num).length === 1) return num;
  const sum = String(num)
    .split("")
    .map((item) => Number(item))
    .reduce((num, total) => num + total, 0);
  return addDigits(sum);
}