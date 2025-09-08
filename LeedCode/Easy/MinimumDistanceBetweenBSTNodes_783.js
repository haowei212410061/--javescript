function minDiffInBST(root) {
  let result = [];
  let min = Infinity;
  let key = 0;
  function dfs(node) {
    if (node) {
      result.push(node.val);
      dfs(node.left);
      dfs(node.right);
    } else {
      return;
    }
  }

  dfs(root);
  result.sort((a, b) => a - b);

  for (let i = 1; i < result.length; i++) {
    if (result[i] - result[key] < min) min = result[i] - result[key];
    key++;
  }

  return min;
}
