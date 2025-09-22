const recoverTree = function (root) {
    let first = null, second = null, prev = null;

    function dfs(node) {
        if (node) {
            dfs(node.left)
            if (prev && node.val < prev.val) {
                if (!first) first = prev;
                second = node
            }
            prev = node
            dfs(node.right)
        }else return
    }
    dfs(root)

    let tmp = first.val
    first.val = second.val;
    second.val = tmp
};