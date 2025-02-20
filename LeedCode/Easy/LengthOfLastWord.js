/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let str = ""
    let targetStr = s.trim()
    let arr = []
    console.log(targetStr)
    for(let i = 0 ; i < targetStr.length ; i++){
        if(targetStr[i] === " "){
            arr.push(str)
            str = ""
        }
        str += targetStr[i]
    }
    return arr
};

console.log(lengthOfLastWord("hello world"))