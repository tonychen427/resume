// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

const maxDepth = root => {
    let max = 0;
    const findMaxDepth = (node, currDepth) => {
        if (node === null) return currDepth;
        if (currDepth > max) { max = currDepth; }
        if (node.left !== null) { findMaxDepth(node.left, currDepth + 1); }
        if (node.right !== null) { findMaxDepth(node.right, currDepth + 1); }
    }
    findMaxDepth(root, 1);
    return max;
}

var maxDepth2 = function(root) {
    if (root === null) return 0;
    return Math.max(maxDepth2(root.left), maxDepth2(root.right)) + 1;
};

console.log(maxDepth(null));