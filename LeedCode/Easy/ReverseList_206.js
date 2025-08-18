function reverseList(head) {
  let result = [];
  while (head) {
    result.push(head);
    head = head.next;
  }
  for (let i = result.length - 1; i > 0; i--) {
    result[i].next = result[i - 1];
  }
  if (result.length > 0) {
    result[0].next = null;
    return result[result.length - 1];
  }

  return null;
}
// 直接將linkedlist存在陣列內 再從陣列尾端依序接上 最後return 陣列的最後一個節點