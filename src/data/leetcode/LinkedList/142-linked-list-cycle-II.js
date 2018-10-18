var detectCycle = function(head) {
    if (head === null || head.next === null) return null;
    let fast = head.next;
    let slow = head;
    while (fast !== slow) {
        if(fast==null || fast.next==null) return null;
        fast = fast.next.next;
        slow = slow.next;
    }
    while (head !== slow.next) {
        head = head.next;
        slow = slow.next;
    }
    return head;
};
