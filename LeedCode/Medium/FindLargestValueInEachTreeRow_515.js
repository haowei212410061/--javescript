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
 * @return {number[]}
 */
const largestValues = function (root) {
    function bfs(root) {
        if (!root) return [];
        let res = [];
        let queue = [root]; // 佇列存節點

        
        while (queue.length > 0) {
            let size = queue.length
            let max = -Infinity
            // 一層一層循環
            for (let i = 0; i < size; i++) {
                let node = queue.shift();
                max = Math.max(max, node.val)
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            res.push(max)
        }
        return res;
    }
    return bfs(root)
} 