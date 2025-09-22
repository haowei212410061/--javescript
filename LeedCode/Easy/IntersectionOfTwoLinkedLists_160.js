/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
    let pos1 = headA, pos2 = headB


    while (pos1 !== pos2) {

        // 因為在while loop條件內沒有判斷 pos1.next or pos2.next 是否等於null 所以就等走到節點 然後判斷是否null就好
        pos1 = pos1 ? pos1.next : headB
        pos2 = pos2 ? pos2.next : headA
    }

    return pos1

};

/**
題目重點
給兩個單向鏈結串列 headA、headB
找出 第一個相交的節點（同一個 node 物件，而不是值相等）
如果沒有交點 → 回傳 null
不能改變原本鏈結結構
\U0001f539 解法思路
1. 暴力解 (O(m·n))
listA 每個節點逐一比對 listB
太慢，不實用

2. HashSet (O(m+n), O(m) space)
先把 listA 節點放進 HashSet
再走 listB，看第一個出現的節點
但需要額外空間，不是最優

3. 雙指針法（最佳解 ✅, O(m+n), O(1) space）
設 pA = headA, pB = headB
while (pA !== pB)：
pA = pA ? pA.next : headB;
pB = pB ? pB.next : headA;
若有交點，會在交點相遇
若無交點，最後會同時變成 null
\U0001f539 為什麼雙指針一定會相遇？

假設：

listA 長度 = a + c

listB 長度 = b + c

交點尾巴長度 = c

指標走的總長度：

pA：a + c + b

pB：b + c + a

\U0001f449 總長度相等，所以一定會在 交點 c1 或 同時 null 相遇。
\U0001f539 關鍵細節
return 的是節點 (node)，不是值
LeetCode judge 會檢查「引用是否相同」
ex: return pA;（而不是 pA.val）
不用在 while 內檢查 next == null
因為走到 null 會自動換跑道
沒有交點的情況，兩個最後會同時是 null
\U0001f539 心法總結
雙指針交換跑道 → 對齊路徑長度
有交點 → 相遇在交點
無交點 → 同時 null
時間 O(m+n)，空間 O(1) → 最佳解

 */