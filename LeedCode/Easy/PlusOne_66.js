/**
 * @param {number[]} digits
 * @return {number[]}
 */

//
var plusOne = function(digits) {
    let str = ""
    let result = []
    for(let i = 0 ; i<digits.length ;i++){
        str+= String(digits[i])
    }
    let num = (BigInt(str)+BigInt(1)).toString();
    for(let i = 0 ; i < num.length ;i++){
        result.push(parseInt(num[i]))
    }
    return result
};
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))