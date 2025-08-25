function maxPower(s) {
  let maxLength = 1;
  let count = 1;

  if (s.length === 1) return 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) count++;
    else {
      if (count > maxLength) maxLength = count;
      count = 1;
    }
  }
  if (count > maxLength) maxLength = count;
  return maxLength
}