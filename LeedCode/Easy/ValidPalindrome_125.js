// 產生新字串的方法
function isPalindrome(s) {
  const verifyString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let start = 0;
  let end = verifyString.length - 1;

  while (start <= end) {
    if (verifyString[start] !== verifyString[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
}
console.log(isPalindrome("0P"));

function isValidString(str) {
  return /[^a-zA-Z0-9]/.test(str);
}

// 不產生新字串的方法
function QuickPalindrome(s) {
  let start = 0;
  let end = s.length - 1;

  while (start <= end) {
    // 忽略非英文字母 非數字的字符
    while (start < end && !isValidString(s[start])) start++;
    while (start < end && !isValidString(s[end])) end++;

    // 轉換成小寫比對
    if (s[start].toLowerCase() !== s[end].toLowerCase()) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
}
