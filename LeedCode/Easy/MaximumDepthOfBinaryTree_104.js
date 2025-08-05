// 創建節點
function treeNode(val, left, right, parent) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.parent = parent === undefined ? null : parent;
}
// 建立節點陣列
let binaryTree = [];

for (let j = 0; j < 10; j++) {
  const node = new treeNode(j);
  binaryTree.push(node);
}

console.log(binaryTree);

// 陣列轉binaryTree
function buildBinaryTree(trees) {
  for (let i = 0; i < trees.length; i++) {
    const leftIndex = 2 * i + 1;
    const rightIndex = 2 * i + 2;

    if (leftIndex < trees.length) {
      trees[i].left = trees[leftIndex];
      trees[leftIndex].parent = trees[i];
    }
    if (rightIndex < trees.length) {
      trees[i].right = trees[rightIndex];
      trees[rightIndex].parent = trees[i];
    }
  }

  return trees[0];
}
const root = buildBinaryTree(binaryTree);

// 測試一下
function printInOrder(node) {
  if (!node) return;
  printInOrder(node.left);
  console.log(
    "當前節點 : ",
    node.val,
    "父節點 : ",
    node.parent ? node.parent.val : null
  );
  printInOrder(node.right);
}

printInOrder(root);


/**計算最大深度 */
function maxDepth(root) {
  if (!root) return 0;

  // 先往左邊走到底 然後再走右邊 最後比較左右子樹深度
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return Math.max(left, right) + 1;
}

console.log(maxDepth(root));
