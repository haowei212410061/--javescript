function minDepth(root) {
  if (!root) return 0;

  // 先往左邊走到底 然後再走右邊 最後比較左右子樹深度
  const left = minDepth(root.left);
  const right = minDepth(root.right);

  if (root.left === null) return right + 1;
  if (root.right === null) return left + 1;

  return Math.min(left, right) + 1;
}