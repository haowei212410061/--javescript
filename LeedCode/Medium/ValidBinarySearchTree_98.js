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
 * @return {boolean}
 */

// 最佳解
const isValidBST = function (root) {
    const res = []
    let prev = -Infinity
    let isValid = true

    function dfs(node) {
        if (!node || !isValid) return
        dfs(node.left)
        
        // inorder travsral 每次拿到的節點值都必定大於前一個節點的值 所以一邊遞迴 一邊更新prev值就好
        if (node.val <= prev) {
            isValid = false
            return
        }
        prev = node.val
        dfs(node.right)
    }
    dfs(root, prev)
    return isValid

};

// 暴力解
const isValidBST1 = function (root) {
    const res = []
    function dfs(node) {
        if (node) {
            dfs(node.left)
            res.push(node.val)
            dfs(node.right)
        } else {
            return
        }
    }
    dfs(root)
    // 中序遍歷 拿到的順序就是升冪序列 所以只要判斷當前節點是否小於下一個節點即可
    if (res.length === 1) return true
    else {
        for (let i = 0; i < res.length; i++) {
            console.log(res[i], res[i + 1])
            if (res[i] >= res[i + 1]) return false
        }
        return true
    }

};
