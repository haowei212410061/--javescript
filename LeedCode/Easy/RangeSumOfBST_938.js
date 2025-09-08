const rangeSumBST = function (root, low, high) {
    let sum = 0;
    function dfs(node) {
        if (node) {
            if (node.val >= low && node.val <= high) sum += node.val
            dfs(node.left);
            dfs(node.right)
        }
    }
    dfs(root)
    return sum
};