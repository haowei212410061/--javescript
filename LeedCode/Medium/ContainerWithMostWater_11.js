/**
 * @param {number[]} height
 * @return {number}
 */

//利用雙指針
//每次都比較arr[left] and arr[right]的值 如果left比較小就往前一格 如果right比較小就往後退一格
//每次都計算面積 然後比較當前最大值
var maxArea = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1
    let k = 0;
    for(let i = 0 ; i < height.length ; i++){      
        if(height[left] > height[right]){
            let result = (right - left) * height[right]
            max = Math.max(max,result)
            right --
        }else{
            let result = (right - left) * height[left]
            max = Math.max(max,result)
            left ++
        }
    }
    return max
};