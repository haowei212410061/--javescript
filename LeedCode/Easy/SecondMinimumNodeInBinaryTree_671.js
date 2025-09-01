function findSecondMinimumValue(root) {
  // 因為所有數字都大於-Infinity 所以要用Infinity
  let min1 = Infinity,
    min2 = Infinity;

  function dfs(node) {
    if (node) {
      dfs(node.left);
      if (node.val < min1) {
        [min1, min2] = [node.val, min1];
      } else if (node.val > min1 && node.val < min2) {
        min2 = node.val;
      }
      dfs(node.right);
    } else {
      return;
    }
  }
  dfs(root);

  return min2 === Infinity ? -1 : min2;
}
