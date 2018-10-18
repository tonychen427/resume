// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Example 1:

// Input:
//     2
//    / \
//   1   3
// Output: true
// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6
// Output: false
// Explanation: The input is: [5,1,4,null,null,3,6]. The root node's value
//              is 5 but its right child's value is 4.

// inorder traversal
const isValidBST = root => {
    let result = [];
    const traversal = head => {
        if (head === null) return head;
        traversal(head.left);
        result.push(head.val);
        traversal(head.right);
    }
    traversal(root);
    
    let slow = 0;
    let fast = 1;
    while (fast <= result.length - 1) {
        if (result[slow] >= result[fast]) return false;
        slow++;
        fast++;
    }
    return true;
}
// ----------------------------------------------------------
var isValidBST2 = root => helper(root, null, null)

var helper = (root, min, max) => {
  if (root === null) return true
  if (min !== null && root.val <= min) return false
  if (max !== null && root.val >= max) return false
  return helper(root.left, min, root.val) && helper(root.right, root.val, max)
}

console.log(isValidBST(null));
console.log(isValidBST2(null));