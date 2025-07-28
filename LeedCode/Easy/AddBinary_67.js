// 先轉十進位 加總後再轉回二進位 無法處理BigInt

function addBinary(a, b) {
  let numA = 0;
  let numB = 0;
  let finalStr = [];

  let powCountA = a.length - 1;
  let powCountB = b.length - 1;

  for (let i = 0; i < a.length; i++) {
    let mutiNum = Number(a[i]) * Math.pow(2, powCountA);
    console.log(`a : ${Number(a[i])} * ${Math.pow(2, powCountA)}`);
    numA += mutiNum;

    if (powCountA === 0) {
      break;
    }
    powCountA--;
  }

  for (let j = 0; j < b.length; j++) {
    let mutiNum = Number(b[j]) * Math.pow(2, powCountB);
    console.log(`b : ${Number(b[j])} * ${Math.pow(2, powCountB)}`);
    numB += mutiNum;
    if (powCountB === 0) {
      break;
    }
    powCountB--;
  }

  let sum = numA + numB;

  console.log([numA, numB]);

  while (sum > 0) {
    finalStr.push(String(sum % 2));
    sum = Math.floor(sum / 2);
  }

  return finalStr.reverse().join("");
}


// 最好的做法 用於處理BigInt
function addBinaryToBinInt(a, b) {

  // 從字串最左邊開始計算
  let i = a.length - 1;
  let j = b.length - 1;

  // carry主要處理下一輪是否要進位的問題
  let carry = 0;
  let result = [];


  while (i >= 0 || j >= 0 || carry > 0) {

    // 處理a,b長度不一致問題
    const bitA = i >= 0 ? Number(a[i]) : 0;
    const bitB = j >= 0 ? Number(b[j]) : 0;

    const sum = bitA + bitB + carry;

    // 當前這輪只處理餘數 因為只能是1或0 如果需要進位 下一輪會處理
    result.push(sum % 2);
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return result.reverse().join("");
}
