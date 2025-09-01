function reverseBits(n) {
  // 轉成二進位字串 & 補到 32 位
  let bin = n.toString(2).padStart(32, "0");
  // 反轉字串
  let rev = bin.split("").reverse().join("");
  // 轉回十進位（基數 2）
  return parseInt(rev, 2);
}
