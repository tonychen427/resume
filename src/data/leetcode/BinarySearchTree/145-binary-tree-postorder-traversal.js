// Given a binary tree, return the postorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [3,2,1]

var postorderTraversal = function(root) {
    let result = [];
    const traversal = node => {
        if (node === null) return result;
        traversal(node.left);
        traversal(node.right);
        result.push(node.val);
    }
    traversal(root);
    return result;
}
console.log(postorderTraversal(null));