const rightSideView = function (root) {
    function bfs(root) {
        if (!root) return []
        const queue = [root]
        const res = []

        while (queue.length > 0) {
            let size = queue.length
            let levels = []
            for (let i = 0; i < size; i++) {
                let node = queue.shift()
                levels.push(node.val)
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
            }
            let rightNode = levels.length === 1 ? levels[0] : levels.pop()
            res.push(rightNode)
        }
        return res
    }

    return bfs(root)
};