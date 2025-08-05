function BinaryTreeInorderTraversal(root) {
  let numbers = [];

  // 二元樹inorder順序為左 - 中 - 右
  function traversal(node) {
    if (node !== null) {
      traversal(node.left);
      numbers.push(node.val);
      traversal(node.right);
    }
  }
  traversal(root);
  return numbers;
}
