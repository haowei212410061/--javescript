/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    if(s.length === 0)return t
    const str1 = s.split("").map((str)=>str.charCodeAt(0)).reduce((total,a)=>total+a);
    const str2 = t.split("").map((str)=>str.charCodeAt(0)).reduce((total,a)=>total+a); 
    return String.fromCharCode(str2-str1)
};