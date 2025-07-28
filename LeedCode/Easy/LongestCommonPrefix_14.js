function longestCommonPrefix(strs) {
  if (strs[0] === "") return "";
  if (strs.length === 1) return strs[0];
  let str = "";
  
  // 第一層迴圈 : 用陣列的第一個字串(strs[0]的長度)
  for (let i = 1; i <= strs[0].length; i++) {
    
    // 第二層迴圈 : 用陣列(strs的長度)去循環每個字串的前綴
    for (let j = 0; j < strs.length; j++) {
      let isTrue = false;
      console.log(`str[${j}]: ${strs[j].slice(0, i)}`);
      
      // 如果字串符合[isTrue = true]並更新字串str的值
      if (strs[j].slice(0, i) === strs[0].slice(0, i)) {
        str = strs[0].slice(0, i);
        isTrue = true;
        
        // 如果字串不符合[isTrue = false]並將str的長度減一[str.slice(0, i - 1)] 
        // 這樣做是避免 前面的字串符合 後面的字串不符合 
      } else if (strs[j].slice(0, i) !== strs[0].slice(0, i)) {
        isTrue = false;
        return str.slice(0, i - 1);
      }
    }
  }
  return str;
}
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));