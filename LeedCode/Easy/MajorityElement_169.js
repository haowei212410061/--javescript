/**
 * @param {number[]} nums
 * @return {number}
 */

//用map記住所有數字出現的次數
//如果該數字已經在map裡面 就重新設定count
//如果該數字沒有出現在map裡面 就初始化 將該數字的次數設定為1
//接著用max紀錄最大的次數 用maxVal紀錄出現次數最多的數字
var majorityElement = function(nums) {
    let map = new Map();
    let max = 0
    let maxVal = 0
    for(let i = 0 ; i < nums.length ; i++){
        if(map.has(nums[i])){
            let count = map.get(nums[i]) + 1
            map.set(nums[i],count)
        }else{
            map.set(nums[i],1)
        }
    }
    map.forEach((value,key,map)=>{
        if(value > max){
            max = value
            maxVal = key
        }
    })
    return maxVal
};

