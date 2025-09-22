const sumNumbers = function (root) {
    let res = 0
    function dfs(node, sum) {
        if (node) {
            sum = sum * 10 + node.val

            // 判斷是否走到葉子節點了
            if (!node.left && !node.right) {
                res += sum
            }
            dfs(node.left, sum)
            dfs(node.right, sum)
        } else {
            return
        }
    }
    dfs(root, '')
    return res
};
