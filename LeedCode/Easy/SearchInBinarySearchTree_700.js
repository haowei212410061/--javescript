function searchBST(root, val) {
  function dfs(node) {
    // 用binarySearchTree的特性 比大小 當前節點比target大 就走左子樹 反之走右子樹
    if (node) {
      if (node.val === val) return node;
      if (node.val < val) return dfs(node.right);
      if (node.val > val) return dfs(node.left);
    } else {
      return;
    }
  }
  return !dfs(root) ? null : dfs(root);
}
