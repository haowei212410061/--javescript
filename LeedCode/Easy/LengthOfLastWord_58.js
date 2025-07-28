String.prototype.StringTrim = function () {
  let start = 0;
  let end = this.length - 1;
  let str = "";

  while (start !== end && this[start] === " ") {
    start++;
  }

  while (end !== start && this[end] === " ") {
    end--;
  }

  for (let i = start; i <= end; i++) {
    str += this[i];
  }

  return str;
};

function lengthOfLastWord(s) {

  // 先用自己創建的函數 刪除字串頭尾兩端的空白
  const trimStr = s.StringTrim();
  const strLength = trimStr.length - 1;
  let finalStr = "";

  // 從字串尾端開始走 遇到空白就停止 然後回傳finalStr
  for (let i = strLength; i >= 0; i--) {
    console.log(trimStr[i]);
    if (trimStr[i] === " ") {
      break;
    } else {
      finalStr += trimStr[i];
    }
  }
  return finalStr.length;
}

console.log(lengthOfLastWord(" hello world "));
