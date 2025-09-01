function isHappy() {
  if (n.toString(10).length === 1) {
    if (n === 1 || n === 7) return true;
    else return false;
  }

  let loopTimes = n.toString(10).length;
  const str = n.toString(10);
  let sum = 0;
  for (let i = 0; i < loopTimes; i++) {
    sum += Math.pow(Number(str[i]), 2);
  }

  return isHappy(sum);
}
