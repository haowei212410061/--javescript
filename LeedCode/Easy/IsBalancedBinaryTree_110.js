function isBalanced(root) {
  function dfs(node) {
    if (!node) return [true, 0];

    const [isLeftBalanced, isLeftHeight] = dfs(node.left);
    const [isRightBalanced, isRightHeight] = dfs(node.right);

    const balanced =
      isLeftBalanced &&
      isRightBalanced &&
      Math.abs(isLeftHeight - isRightHeight) <= 1;

    // 計算節點高度的時候 必須把自己本身也算進去 所以要加1
    const height = Math.max(isLeftHeight, isRightHeight) + 1;

    return [balanced, height];
  }
  const [balanced] = dfs(root);
  return balanced;
}