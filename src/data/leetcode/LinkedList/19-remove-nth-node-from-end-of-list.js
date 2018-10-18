// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
const ListNode = val => {
    this.val = val;
    this.next = null;
}
const removeNthFromEnd = (head, n) => {
    if (head === null && n === 0) return head;
    let dummyNode = new ListNode(0);
    dummyNode.next = head;
    let slow = dummyNode;
    let fast = dummyNode;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return dummyNode.next;
}

console.log(removeNthFromEnd(new ListNode(0), 1));