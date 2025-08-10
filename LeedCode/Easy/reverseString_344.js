// 不額外產生字串的方法 直接修改原字串

function reverseString(s) {
  let start = 0;
  let end = s.length - 1;
  while (start <= end) {
    let tmp = s[start];
    s[start] = s[end];
    s[end] = tmp;
    start++;
    end--;
  }
  return s;
}
