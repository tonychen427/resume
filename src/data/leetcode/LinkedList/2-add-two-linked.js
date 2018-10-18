// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const ListNode = val => {
    this.val = val;
    this.next = null;
};
var addTwoNumbers = function(l1, l2) {
    let twoSum = new ListNode(0);
    let cur = twoSum;
    let carryOver = 0;
    while(l1 || l2) {
       let val1 = l1 && l1.val !== null ? l1.val : 0;
       let val2 = l2 && l2.val !== null ? l2.val : 0;
       let sum = val1 + val2 + carryOver;
       if (sum >= 10) {
          cur.next = new ListNode(sum % 10);
          carryOver = Math.floor(sum / 10);
       } else {
          cur.next = new ListNode(sum);
          carryOver = 0;
       }
       cur = cur.next;
       l1 = l1 && l1.next;
       l2 = l2 && l2.next;
    }
    if (carryOver > 0) {
        cur.next = new ListNode(carryOver);
    }
    return twoSum.next;
  };

  console.log(addTwoNumbers(null, null));