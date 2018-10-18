// Given a sorted linked list, delete all duplicates such that each element appear only once.

// Example 1:

// Input: 1->1->2
// Output: 1->2
// Example 2:

// Input: 1->1->2->3->3
// Output: 1->2->3

const deleteDuplicates = head => { 
    if (head === null) { return head; }
    let current = head;
    while (current) {
        if(current.next && current.next.val === current.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}
console.log(deleteDuplicates(null));