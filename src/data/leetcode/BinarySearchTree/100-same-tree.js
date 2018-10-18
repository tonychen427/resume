// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

// Example 1:

// Input:     1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// Output: true
// Example 2:

// Input:     1         1
//           /           \
//          2             2

//         [1,2],     [1,null,2]

// Output: false
// Example 3:

// Input:     1         1
//           / \       / \
//          2   1     1   2

//         [1,2,1],   [1,1,2]

// Output: false

const isSameTree = (tree1, tree2) => {
    if (tree1 === null || tree2 === null) { return true; }
    if ((tree1 !== null && tree2 === null) && (tree1 === null && tree2 !== null)) { return false; }
    if (tree1.val !== tree2.val) { return false; }
    return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
}