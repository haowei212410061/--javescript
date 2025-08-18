function countNodes(root) {
  let count = 0;
  function maxDepth(root) {
    if (root) {
      count++;
      maxDepth(root.left);
      maxDepth(root.right);
    }else{
        return 
    }
  }
  maxDepth(root)
  return count
}
