function SumOfLeftLeaves() {
  let sum = 0;

  function traversal(node) {
    if (!node) return null;

    // 當前節點有左子樹 且左子樹沒有子節點
    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    }
    traversal(node.left);
    traversal(node.right);
  }
  traversal(root);
  return sum;
}
