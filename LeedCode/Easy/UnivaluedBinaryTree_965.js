function isUnivalTree(root) {
  function dfs(node, target) {
    if (node) {
      if (node.val !== target) return false;

      const left = dfs(node.left, target);
      const right = dfs(node.right, target);

      return left && right;
    } else {
      return true;
    }
  }

  return dfs(root, root.val);
}
