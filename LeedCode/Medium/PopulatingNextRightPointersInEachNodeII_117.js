/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
const connect = function (root) {

    function bfs(root) {
        if (!root) return null
        const queue = [root]

        while (queue.length > 0) {
            let size = queue.length
            let levels = []

            for (let i = 0; i < size; i++) {
                let node = queue.shift();
                levels.push(node)
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
            }

            for (let j = 0; j < levels.length; j++) {
                let curr = levels[j]
                curr.next = levels[j + 1] === undefined ? null : levels[j + 1]
            }
        }
        return root
    }

    return bfs(root)
};