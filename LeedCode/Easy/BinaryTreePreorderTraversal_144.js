function treeNode(val, left, right, parent) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.parent = parent === undefined ? null : parent;
}

let binaryTree = [];

for (let j = 0; j < 10; j++) {
  const node = new treeNode(j);
  binaryTree.push(node);
}

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

// preorder 順序 : 根結點 - 左 - 右

function preorderTraversal(root){
    let nums = []
    
    function traversal(node){
        if(node){
            nums.push(node.val)
            traversal(node.left)
            traversal(node.right)
        }
        return
    }
    traversal(root)
    return nums
}


console.log(preorderTraversal(root))