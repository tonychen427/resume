// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
// ]

var zigzagLevelOrder = function(root) {
    if (root === null) return [];
    let result = [];
    let queue = [root];
    let normal = true;
    while (queue.length > 0) {
        let size = queue.length;
        let current = [];
        for (let i = 0; i < size; i++) {
            let head = queue.shift();
            normal ? current.push(head.val) : current.unshift(head.val);
            if (head.left !== null) { queue.push(head.left); }
            if (head.right !== null) { queue.push(head.right); }
        }
        result.push(current);
        normal = !normal;
    }
    return result;
}
console.log(zigzagLevelOrder(null));