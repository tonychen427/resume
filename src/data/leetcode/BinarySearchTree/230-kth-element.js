// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

// Note: 
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

// Example 1:

// Input: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// Output: 1
// Example 2:

// Input: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// Output: 3

const kthSmallest = (root, k) => {
    let counter = 0;
    let kth = null;
    let inorderTraversal = node => {
        if (node.left !== null) { inorderTraversal(node.left); }
        counter++;
        if (counter === k) { kth = node; }
        if (node.right !== null) { inorderTraversal(node.right); }
    }
    inorderTraversal(root);
    return kth.val;
}

console.log(kthSmallest(null,0));