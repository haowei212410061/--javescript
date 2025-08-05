// postorder 順序 : 左 - 根結點 - 右

function postorderTraversal(root){
    let nums = []

    function traversal(node){
        if(node !== null){
            traversal(node.left)
            traversal(node.right)
            nums.push(node)
        }
    }
    traversal(root)
    return nums
}