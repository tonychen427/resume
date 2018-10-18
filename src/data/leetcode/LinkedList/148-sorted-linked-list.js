// Sort a linked list in O(n log n) time using constant space complexity.

// Example 1:

// Input: 4->2->1->3
// Output: 1->2->3->4
// Example 2:

// Input: -1->5->3->4->0
// Output: -1->0->3->4->5
 
// const ListNode = (val) => {
//     this.val = val;
//     this.next = null;
// }
function ListNode(val) {
    this.val = val;
    this.next = null; 
}
const mergeTwoLists = (list1, list2) => {
    let mergeTwoList = new ListNode(0);
    let current = mergeTwoList;
    while(list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    if (list1 === null) { current.next = list2; }
    if (list2 === null) { current.next = list1; }
    return mergeTwoList.next;
}
const sortList = head => {
    if (head === null || head.next === null) return head;
    let pre = head, slow = head, fast = head;
    while(fast !== null && fast.next !== null) {
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    pre.next = null;
    return mergeTwoLists(sortList(head), sortList(slow))
}

const n1 = new ListNode(1);
const n2 = new ListNode(12);
const n3 = new ListNode(3);
const n4 = new ListNode(24);
const n5 = new ListNode(5);
const n6 = new ListNode(36);
const n7 = new ListNode(7);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;

console.log(n1);

console.log(sortList(n1));