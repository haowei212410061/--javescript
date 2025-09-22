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
const maxLevelSum = function (root) {

    function bfs(root) {
        if (!root) return []
        const queue = [root]
        let level = 0
        let max = -Infinity
        let maxLevel = 0

        while (queue.length > 0) {
            const size = queue.length
            let sum = 0
            level++
            for (let i = 0; i < size; i++) {
                let node = queue.shift();
                sum += node.val
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
            }
            if (sum > max) [maxLevel, max] = [level, sum]
        }
        return maxLevel
    }

    return bfs(root)
};