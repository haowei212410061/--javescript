/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const increasingBST = function (root) {
    let values = []

    // 蒐集所有的值
    function dfs(node) {

        // 用inorder的話 就可以自動排序 不用再sort了
        if (node) {
            dfs(node.left)
            values.push(node.val)
            dfs(node.right)
        } else {
            return
        }
    }

    // 執行遞迴 並排序
    dfs(root)


    // 創建整個樹的根節點
    const Root = new TreeNode(values[0])
    
    // 創建一個pointer 並用於串聯整個樹
    let pointer = Root
    let key = 1;
    while (pointer && key < values.length) {
        const children = new TreeNode(values[key])
        // 只接在右子樹
        pointer.right = children
        pointer = pointer.right
        key++
    }
    return Root
};