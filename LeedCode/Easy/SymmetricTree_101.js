function SymmetricTree(root) {
  function isMissNode(node1, node2) {
    if (node1 === null && node2 === null) return true; // 看當前的節點 如果都是Null 即為true
    if (node1 === null || node2 === null) return false; // 代表左右子樹高度不一樣
    if (node1.val !== node2.val) return false; // 值不一樣

    return (
      isMissNode(node1.left, node2.right) && isMissNode(node1.right, node2.left)
    );
  }

  //isMissNode(root.left, root.right);
  return isMissNode(root.left, root.right);
}
