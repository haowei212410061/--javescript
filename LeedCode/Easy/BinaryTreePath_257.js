function binaryTreePaths(root) {
  const result = [];

  function dfs(node, cur) {
    if (!node) return;
    const next = cur ? `${cur}->${node.val}` : `${node.val}`;


    // 遇到葉子就回傳
    if (!node.left && !node.right) {
      result.push(next);
      return;
    }
    dfs(node.left, next);
    dfs(node.right, next);
  }

  dfs(root, "");
  return result;
}
