
var invertTree = function (root) {
    
    function traversal(node) {
        if (node) {
            // 先交換 在traversal
            [node.left,node.right] = [node.right,node.left]
            traversal(node.left);
            traversal(node.right);
            return node
        }else{
            return null
        }
    }
    return traversal(root);
};