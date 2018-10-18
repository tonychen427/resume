// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

const ListNode = val => {
    this.val = val;
    this.next = null;
}
const mergeTwoLists = (list1, list2) => {
    let mergedList = new ListNode(0);
    let prev = mergedList;
    while(list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            prev.next = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next;
    }
    if (list1 === null) { prev.next = list2; }
    if (list2 === null) { prev.next = list1;}
    return mergedList.next;
}
console.log(mergeTwoLists(null,null));