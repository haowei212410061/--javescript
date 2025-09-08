const postorder = function(root) {
    let result = []
    function preorder(node) {
        if (node) {
            for (let children of node.children) {
                preorder(children)
            }
            result.push(node.val)
        }
    }
    preorder(root)
    return result
};