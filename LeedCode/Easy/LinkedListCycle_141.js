function LinkedListCycle(head) {
  const newSet = new Set();
  if (!head) return false;
  if (!head.next) return false;
  while (head) {
    if (newSet.has(head)) return true;
    else newSet.add(head);
    head = head.next;
  }
  return false;
}
