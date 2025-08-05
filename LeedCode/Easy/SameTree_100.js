function SameTree(p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  

  return SameTree(p.left, q.left) && SameTree(p.right, q.right);
}


// 除了要比較值之外 也要比較tree的結構 結構不對也算false