/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function (root1, root2) {
    let leaf1 = []
    let leaf2 = []

    function dfs(node, arr) {
        if (node) {
            if (!node.left && !node.right) {
                arr.push(node.val)
            }
            dfs(node.left, arr);
            dfs(node.right, arr);
        } else {
            return
        }
    }
    dfs(root1, leaf1);
    dfs(root2, leaf2);

    if (leaf1.length !== leaf2.length) return false
    else {
        for (let i = 0; i < Math.min(leaf1.length, leaf2.length); i++) {
            if (leaf1[i] !== leaf2[i]) return false
        }
        return true
    }

};