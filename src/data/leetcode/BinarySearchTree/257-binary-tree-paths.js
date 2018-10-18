// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

const binaryTreePaths = root => {
    // sanity check
    var result = [];
    if (!root) { return result; }
    const preorderTraversal = (node, content) => {
        if(!node.left && !node.right) { result.push(content + node.val); }
        if (node.left !== null) { preorderTraversal(node.left, content + node.val + '->'); }
        if (node.right !== null) { preorderTraversal(node.right, content + node.val + '->'); }
    }
    preorderTraversal(root, '');
    return result;
}

console.log(binaryTreePaths(null));