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
            let prev = null

            // 一層一層遍歷 然後加到levels裡面
            for (let i = 0; i < size; i++) {
                let node = queue.shift();

                // 接到當前節點上  並更新前一個節點
                if (prev) prev.next = node;
                prev = node
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
            }

            // // 每一層的每個節點 都接上next
            // for (let i = 0; i < levels.length; i++) {
            //     let current = levels[i]
            //     current.next = levels[i + 1] === undefined ? null : levels[i + 1]
            // }
        }

        return root
    }
    return bfs(root)

};