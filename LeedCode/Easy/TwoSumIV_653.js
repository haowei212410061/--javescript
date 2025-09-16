const findTarget = function (root, k) {
    let arr = []

    function dfs(node) {
        if (node) {
            arr.push(node.val)
            dfs(node.left)
            dfs(node.right)
        } else return
    }

    dfs(root)

    let set1 = new Map()

    for (let i = 0; i < arr.length; i++) {
        let target = k - arr[i]
        if (set1.has(target)) return true
        else (set1.set(arr[i], i))
    }
    return false
};