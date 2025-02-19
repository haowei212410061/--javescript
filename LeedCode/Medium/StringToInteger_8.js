/**
 * @param {string} s
 * @return {number}
 */

//前置處理1: 把字串前後的空格刪除
//前置處理2: 判斷字串第一個字元是 "-" or "+"
//如果在循環中遇到不為數字的字元 則break 
//檢查result字串是否為空 如果為空 return 0
//檢查result字串是否大於max或小於min

var myAtoi = function(s) {
    s = s.trim(/ /g,"") 
    let regex = /[0-9]/
    let min = -(Math.pow(2,31))
    let max = (Math.pow(2,31)) - 1   
    if(s[0] === "-"){
        let result = ""
        for(let i = 1 ; i < s.length ; i++){
            if(!regex.test(s[i])){
                break
            }else{
                result += s[i]
            }
        }
        result = "-" + result
        if(result === "-"){
            return 0
        }
        return Number(result) <= min ? min : Number(result)
    }else if(s[0] === "+"){
        let result = ""
        for(let i = 1 ; i < s.length ; i++){
            if(!regex.test(s[i])){
                break
            }else{
                result += s[i]
            }
        } 
        if(result === "")return 0
        return Number(result) >= max ? max : Number(result)
    }else{
        let result = ""
        for(let i = 0 ; i < s.length ; i++){
            if(!regex.test(s[i])){
                break
            }else{
                result += s[i]
            }
        } 
        if(result === "")return 0
        return Number(result) >= max ? max : Number(result)
    }
};
