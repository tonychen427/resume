// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

function TreeNode(val){
    this.val = val;
    this.right = null;
    this.left = null;
}
const levelOrder = root => {
    if (root === null) return [];
    let result = [];
    let queue = [root];
    while (queue.length > 0) {
        let size = queue.length;
        let current = [];
        for (let i = 0; i < size; i++) {
            let head = queue.shift();
            current.push(head.val);
            if (head.left !== null) { queue.push(head.left); }
            if (head.right !== null) { queue.push(head.right)}
        }
        result.push(current);
    }
    return result;
}

const levelOrders2 = root => {
    // sanity check
    if (root === null ) return [];
    let result = [];
    let queue = [root];
    while(queue.length > 0) {
        let size = queue.length;
        let current = [];
        for (let i = 0; i < size; i++) {
            let node = queue.pop();
            current.push(node.val);
            if (node.left !== null) { queue.push(node.left); }
            if (node.right !== null) { queue.push(node.right); }
        }
        result.push(current);
    }
    return result;
 }

 // Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]
const n1 = new TreeNode(3);
const n2 = new TreeNode(9);
const n3 = new TreeNode(20);
const n4 = new TreeNode(15);
const n5 = new TreeNode(7);

n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;

// console.log(levelOrders2(n1));


const levelOrders = root => {
    if (root === null) return [];
    let result = [];
    let queue = [root];
    while(queue.length > 0) {
        let size = queue.length;
        let current = [];
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            let val = node.val;
            current.push(val);
            if (node.left !== null) { queue.push(node.left);}
            if (node.right !== null) { queue.push(node.right); }
        }
        result.push(current);
    }

    return result;
}

console.log(levelOrders(n1));