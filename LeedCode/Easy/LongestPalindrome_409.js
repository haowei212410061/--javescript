function longestPalindrome(s) {
  let stringCount = {};
  let odd = 0;
  let event = 0;
  let hasEvent = 0;
  for (let i = 0; i < s.length; i++) {
    if (Object.hasOwn(stringCount, s[i])) {
      stringCount[s[i]]++;
    } else {
      stringCount[s[i]] = 1;
    }
  }

  console.log(stringCount);

  for (let key in stringCount) {
    if (stringCount[key] % 2 === 0) odd += stringCount[key];
    else if (stringCount[key] % 2 !== 0) {
      stringCount[key] -= 1;
      console.log("奇數 : ", stringCount[key]);
      event += stringCount[key];
      hasEvent = 1;
    }
  }
  return odd + event + hasEvent;
}

console.log(longestPalindrome("abccccdd"));

// 解題:
// 計數 + 數學歸納 的問題，基本不需要真正去「找回文」。

// 思路很直接：

// 計數：先統計每個字元出現的次數（可以用 Map 或陣列）。

// 配對：回文的左右對稱意味著同一字元必須成對出現（次數為偶數才全部可用）。

// 奇數處理：

// 偶數次數 → 全部用掉。

// 奇數次數 → count - 1 可用來配對，多出的一個只能放在回文的中間（最多一次）。

// 加總：把所有可用的偶數長度加起來，如果有至少一個奇數，那麼答案最後 +1（因為可以放一個在中間）。

// 數學公式化：
// result = Σ(偶數次數) + Σ(奇數次數 - 1) + (有奇數? 1 : 0)
// 例子：
// s = "abccccdd"

// a:1, b:1, c:4, d:2

// 偶數：4 + 2 → 全用

// 奇數：1(a) + 1(b) → 各減 1 變 0，可放中間一個 → +1

// 最長回文長度 = 4 + 2 + 1 = 7