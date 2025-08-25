var isPowerOfThree = function (n) {
  let x = Math.log(n) / Math.log(3);

  // Math.round(x) 四捨五入到最近整數
  // 原本整數x和四捨五入後相減得到誤差
  // 1e-10代表0.0000000001 差距小於這個數當作整數處理
  return Math.abs(x - Math.round(x)) < 1e-10;
};
