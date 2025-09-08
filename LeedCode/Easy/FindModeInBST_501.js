function findMode(root) {
  const obj = {};

  function dfs(node) {
    if (node) {
      if (Object.hasOwn(obj, node.val)) obj[node.val]++;
      else obj[node.val] = 1;

      dfs(node.left);
      dfs(node.right);
    }
  }

  dfs(root);

  let mode = [];
  let max = Math.max(...Object.values(obj));

  for (let key in obj) {
    if (obj[key] === max) mode.push(Number(key));
  }

  return mode;
}
