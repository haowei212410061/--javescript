/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //這個解法目前效能最好
    const strings = String(x)
    let right = strings.length - 1
    for(let i = 0 ; i < strings.length ; i++ ){
        if(strings[i] !== strings[right-i]){
            return false
        }
    }
    return true
};