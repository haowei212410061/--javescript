function findTilt(root) {
  let totalSum = 0;

  // 後序(postorder)
  function dfs(node) {
    if (!node) return 0;

    let leftSum = dfs(node.left);
    let rightSum = dfs(node.right);

    let tilt = Math.abs(leftSum - rightSum);

    totalSum += tilt;
    return node.val + leftSum + rightSum;
  }

  dfs(root);
  return totalSum;
}
