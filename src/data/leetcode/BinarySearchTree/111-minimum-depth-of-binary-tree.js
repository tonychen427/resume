// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its minimum depth = 2.

var minDepth = function(root) {
    // sanity Check
    if (root === null) return 0;
    const left = minDepth(root.left);
    const right = minDepth(root.right);
    return (left === 0 || right === 0) ? (right + left ) + 1 : Math.min(left, right) + 1;
};