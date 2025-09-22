const pathSum = function (root, targetSum) {
    let result = []
    let sum = 0 // 紀錄當前總和
    function dfs(node, path, sum) {
        if (node) {

            // path 紀錄當前路徑
            path.push(node.val)
            
            // sum 紀錄總和
            sum += node.val
            if (!node.left && !node.right) {
                if (sum === targetSum) result.push([...path])
            }

            // 每次傳進去的sum都是上一個節點總和的結果 
            dfs(node.left, path, sum)
            dfs(node.right, path, sum)
            path.pop()
        }
    }
    dfs(root, [], sum)
    return result
};