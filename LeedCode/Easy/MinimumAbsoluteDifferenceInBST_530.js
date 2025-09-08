
// chatGPT版本 記錄前一個節點
var getMinimumDifference = function (root) {
    let prev = null
    let min = Infinity;

    function dfs(node) {
        if (node) {
            dfs(node.left)
            if (prev !== null) {
                min = Math.min(min, node.val - prev)
                
            }
            prev = node.val
            dfs(node.right)
        }
    }
    dfs(root)
    return min

};


// 暴力版本
var getMinimumDifference = function (root) {
    let result = [];

    function dfs(node) {
        if (node) {
            result.push(node.val)
            dfs(node.left)
            dfs(node.right)
        }
    }
    dfs(root)

    result.sort((a, b) => a - b)
    let key = 0
    let min = Infinity
    for (let i = 1; i < result.length; i++) {
        if (Math.abs(result[key] - result[i]) < min) min = Math.abs(result[key] - result[i])
        key++
    }
    return min
};