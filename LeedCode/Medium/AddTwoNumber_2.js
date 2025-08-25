function addTwoNumber(L1, L2) {
  const arr1 = [];
  const arr2 = [];

  let curr1 = L1;
  let curr2 = L2;

  while (curr1) {
    arr1.push(curr1.val);
    curr1 = curr1.next;
  }

  while (curr2) {
    arr2.push(curr2.val);
    curr2 = curr2.next;
  }

  console.log(arr1, arr2);
  let loopTimes = Math.max(arr1.length, arr2.length);
  let result = [],
    carry = 0;
  for (let i = 0; i < loopTimes; i++) {
    const x = arr1[i] ? arr1[i] : 0;
    const y = arr2[i] ? arr2[i] : 0;
    let sum = x + y + carry;

    result.push(sum % 10);
    carry = (sum / 10) | 0;
  }
  if (carry === 1) result.push(1);

  const head = new ListNode(result[0], null);
  let current = head;
  let index = 1;

  while (index < result.length) {
    current.next = new ListNode(result[index]);
    current = current.next;
    index++;
  }

  return head;
}
