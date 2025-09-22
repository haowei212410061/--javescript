const kthSmallest = function (root, k) {
    let res = []
    function dfs(node) {
        if (node) {
            dfs(node.left);
            res.push(node.val)
            if (res.length === k) return
            dfs(node.right)

        } else return
    }
    dfs(root)
    return res[k - 1]
};