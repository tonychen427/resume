// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

const reverseList = head => {
    if (head === null) return head;
    let firstNode = head;
    let currentNode = head.next;
    while (currentNode) {
        head.next = currentNode.next;
        currentNode.next = firstNode;
        firstNode = currentNode;
        currentNode = head.next;
    }
    return firstNode;
}
const isPalindrome = head =>{
    if (head === null || head.next === null) return true;
    let slow = head;
    let fast = head;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = reverseList(slow.next);
    slow = slow.next;
    
    while (slow != null) {
        if (slow.val !== head.val) return false;
        slow = slow.next;
        head = head.next;
    }
    return true;
}

console.log(isPalindrome(null));
