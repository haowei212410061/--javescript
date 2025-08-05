/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let currentNode = head // 注意要使用指標循環while迴圈 不可以直接操作linked list 

    while(currentNode && currentNode.next){
        if(currentNode.val === currentNode.next.val){
            currentNode.next = currentNode.next.next
        }else{
            currentNode = currentNode.next
        }
        
    }
    return head
};