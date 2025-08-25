function repeatedSubstringPattern(s) {
  let left = 0;
  let right = 1;
  while (right <= Math.floor(s.length / 2)) {
    const str = s.slice(left, right);
    if (str.repeat(Math.floor(s.length / str.length)) === s) return true;
    right++;
  }
  return false;
}
console.log(repeatedSubstringPattern("abab"));
