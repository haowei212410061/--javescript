/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    //dummy是linkedlist的開頭 不能動
    //真正在動的是current
    let dummy = new ListNode(); 
    let current = dummy; 

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1; 
            list1 = list1.next;    
        } else {
            current.next = list2; 
            list2 = list2.next;    
        }
        current = current.next; 
    }

    //將剩餘的節點都放到current內
    if (list1 !== null) current.next = list1; 
    if (list2 !== null) current.next = list2;

    //因為直接return dummy的話會是一個linkedlist的開頭 
    //dummy要指向下一個節點 剛剛連接到好的current linkedlist 
    return dummy.next; 
};