/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let max = -Infinity
    function dfs(node) {
        if (node) {
            const leftHeight = dfs(node.left);
            const rightHeight = dfs(node.right);

            const path = leftHeight + rightHeight
            if (path > max) max = path

            return Math.max(leftHeight, rightHeight) + 1

        }else{
            return 0
        }
    }
    dfs(root)
    return max
};

/**
       1
     /   \
    2     3
   / \
  4   5
從 root=1 開始：

進入左子樹 (2)：

左子樹 (4) → 高度=1

右子樹 (5) → 高度=1

更新直徑候選：1+1=2

回傳高度：1+max(1,1)=2

進入右子樹 (3)：

左右子都是空 → 高度=1

更新直徑候選：2+1=3

回傳高度：1+max(2,1)=3

最後答案：maxDiameter=3。



 */