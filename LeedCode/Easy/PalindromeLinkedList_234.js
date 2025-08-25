function isPalindrome(head) {
  let result = [];
  while (head) {
    result.push(head);
    head = head.next;
  }

  let start = 0;
  let end = result.length - 1;
  while (start < end) {
    if (result[start].val !== result[end].val) return false;
    start++;
    end--;
  }
  return true;
}
