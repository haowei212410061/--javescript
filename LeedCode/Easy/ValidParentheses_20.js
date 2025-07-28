function isValid(s) {
  const compareStr = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  let stack = [];

  // 利用stack先進後出的特性
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") stack.push(s[i]);
    else {
      // pop會移出陣列的最後一個元素
      if (stack.pop() !== compareStr[s[i]]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid("([)]"));
