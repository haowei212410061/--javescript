function PathSum() {
  if (!root) return false;
  function dfs(node, sum) {
    if (!node) return 0;
    sum += node.val;

    // 只有遞迴到 當前節點是葉子的時候 才會執行判斷
    if (!node.left && !node.right) return sum === targetSum;

    return dfs(node.left, sum) || dfs(node.right, sum);
  }

  return dfs(root, 0);
}
