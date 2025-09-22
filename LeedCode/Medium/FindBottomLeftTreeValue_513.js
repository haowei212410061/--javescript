const findBottomLeftValue = function (root) {

    // 廣度優先搜尋 return出每一層的node
    function bfs(root) {
        if (root) {
            let queue = [root]
            let res = root.val
            while (queue.length > 0) {
                const size = queue.length

                // 每次循環 i === 0 就是每一層最左邊的值 更新res
                for (let i = 0; i < size; i++) {
                    let node = queue.shift();
                    if (i === 0) res = node.val
                    if (node.left) queue.push(node.left)
                    if (node.right) queue.push(node.right)
                }
            }
            return res
        }

    }

    // 取最後一層第一個值 即為整棵樹最後一層最左邊的值
    return bfs(root)
};
