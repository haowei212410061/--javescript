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

// 利用傳字串的方式 就不用像使用陣列一樣 需要回朔
var sumRootToLeaf = function (root) {

    let result = 0
    function dfs(node, sum) {
        if (node) {
            sum = sum + node.val
            if (!node.left && !node.right) {
                result += parseInt(sum, 2)
            }
            dfs(node.left, sum)
            dfs(node.right, sum)
        } else {
            return
        }
    }
    dfs(root, '')


    return result

};

// 使用陣列記住每條路徑 最後再轉成數字處理 下方trace筆記
function sumRootLeaf1(root) {
    let result = [];

    function dfs(node, path) {
        if (!node) return;
        path.push(String(node.val));
        if (!node.left && !node.right) {
            result.push([...path]); // 存一份拷貝
        }

        dfs(node.left, path);
        dfs(node.right, path);

        path.pop(); // 無論如何都要回溯 是為了回到上一層父節點 
    }

    dfs(root, []);
    return result.map((item) => parseInt(item.join(''), 2)).reduce((num, total) => num + total)
}


/**
樹的結構（）
        1
      /   \
     0     1
    / \   / \
   0  1  0   1


Trace 重點整理
Step 1: root (1) , arr = [1]
左右子樹各遞迴。

Step 2: 左子樹 root → 0 , arr = [1, 0] 再進入左子樹 → leaf 0

because (left === null && right === null) 走到葉子節點 res push [1,0,0]
回溯 → arr = [1,0] 

再進入右子樹 → leaf 1 
because (left === null && right === null) 走到葉子節點 res push [1,0,1]
回溯 → arr = [1]

Step 3: 右子樹 root → 1 , arr = [1, 1] 再進入左子樹 → leaf 0

because (left === null && right === null) 走到葉子節點 res push [1,1,0]
回溯 → arr = [1,1]

再進入右子樹 → leaf 1 because (left === null && right === null) 走到葉子節點 res push [1,1,1]
回溯 → arr = [1]

最後結果
res = [
  [1,0,0],
  [1,0,1],
  [1,1,0],
  [1,1,1]
]

小結
每一層呼叫 dfs 時 arr 的內容
到葉子時 push 結果
遞迴結束後 pop 回溯

 */