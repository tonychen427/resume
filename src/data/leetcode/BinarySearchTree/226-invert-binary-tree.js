// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

var invertTree = function(root) {
    // sanity check
    if (root === null) { return root; }
    let queue = [root];
    while(queue.length > 0) {
        let node = queue.shift();
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        if (node.left !== null) { queue.push(node.left); }
        if (node.right !== null) { queue.push(node.right); }
    }
    return root;
};

console.log(invertTree(null));