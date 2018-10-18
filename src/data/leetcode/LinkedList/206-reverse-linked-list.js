 // Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

const reverseList = head => {
    if (head === null) return head;
    let firstNode = head;
    let currentNode = head.next;
    while(currentNode) {
        head.next = currentNode.next;
        currentNode.next = firstNode;
        firstNode = currentNode
        currentNode = head.next;
    }
    return firstNode;
}
// console.log(reverseList(null));

function Node(val) {
    this.val = val;
    this.next = null;
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
const n6 = new Node(6);
const n7 = new Node(7);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;


var splitListToParts = function (root, k) {
    // Result of K elements, containing the heads of each chunk
    const chunks = new Array(k).fill(null);

    // Find the length of the linked list, we need to know this
    // to find the chunk size 
    let length = 0;

    // Enumerate each node in the linked list until there are none
    for (let node = root; node != null; node = node.next) {
        length++;
    }

    // Calculate a chunk size for each k part
    const chunkSize = length / k | 0;

    // Calculate how much excess has to be distributed to the first
    // n (remainder size) parts
    let chunkRemainder = length % k;

    // Enumerate from the root...
    let current = root;

    for (let insertIdx = 0; insertIdx < k && current != null; insertIdx++) {
        // Store the current node as the head of the chunk 
        chunks[insertIdx] = current;

        // Track the tail of *this* chunk
        let chunkTail = current;

        // Calculate the size of *this* chunk, which is the default chunk size
        // +1 if there is still remainder to be distrubted 
        const size = chunkSize + (chunkRemainder-- > 0 ? 1 : 0);

        // Collect all the next nodes for the appropriate chunk size 
        for (let i = 0; i < size; i++) {
            chunkTail = current;
            current = current.next;
        }

        // Clear the next pointer of the tail of the current chunk so 
        // the chunk terminates in null. 
        chunkTail.next = null;
    }

    return chunks;
};

console.log(splitListToParts(n1, 5));