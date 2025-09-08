const preorder = function (root) {
    let result = []
    function preorder(node) {
        if (node) {
            result.push(node.val)

            for (let children of node.children) {
                preorder(children)
            }
        }
    }
    preorder(root)
    return result
};