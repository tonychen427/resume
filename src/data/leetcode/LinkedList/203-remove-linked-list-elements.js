// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const ListNode = (val) => {
    this.val = val;
    this.next = null;
}
var removeElements = (head, val) => {
    let dummyNode = new ListNode(0);
    dummyNode.next = head;
    head = dummyNode;
    while(head.next !== null) {
        if (head.next.val === val) {
            head.next = head.next.next;
        } else {
            head = head.next;
        }
    }
    return dummyNode.next
}
console.log(removeElements(null,null));