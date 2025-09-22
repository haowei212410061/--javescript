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
 * @return {number}
 */
const deepestLeavesSum = function (root) {
    
    function bfs(root){
        if (!root) return null

        const queue = [root]
        const res = []

        while (queue.length > 0) {
            let size = queue.length
            let levels = 0

            for (let i = 0; i < size; i++) {
                let node = queue.shift()
                levels += node.val
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
            }
            res.push(levels)
        }
        return res
    }

    let lastlevels = bfs(root)
    return lastlevels.pop()
};