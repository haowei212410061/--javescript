/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    let strs = String(x)
    let min = -(Math.pow(2,31))
    let max = (Math.pow(2,31)) - 1

    if(x < 0){
        strs = strs.slice(1)
        for(let i = strs.length - 1 ; i >= 0 ;i--){
            if(result <= min || result >= max){
                return 0
            }else{
                let num = -(Number(strs[i]) * Math.pow(10,i))
                result += num
            }
        }
        
    }else{
        for(let i = strs.length - 1 ; i >= 0 ;i--){
            if(result <= min || result >= max){
                return 0
            }else{
                let num = Number(strs[i]) * Math.pow(10,i)
                result += num
            }
            
        }
        return result
    }    
};

console.log(reverse(123))