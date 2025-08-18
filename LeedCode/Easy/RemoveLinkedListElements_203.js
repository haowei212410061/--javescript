/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (!head) return null

    // 假設從開頭開始 連續的節點都=== val 就一直刪除
    while (head && head.val === val) {
        head = head.next;
    }
    let current = head;

    // 刪到最後如果沒有節點就返回
    if(!head)return null

    // 處理中間節點
    while (current && current.next) {
        if (current.next.val === val) current.next = current.next.next;
        else {
            current = current.next
        }

    }
    return head
};