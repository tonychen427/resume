// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5
const TreeNode = (val) => {
    this.val = val;
    this.left = null;
    this.right = null;
}
const buildBST = (nums, start, end) => {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let bst = new TreeNode(nums[mid]);
    bst.left = buildBST(nums, start, mid - 1);
    bst.right = buildBST(nums, mid + 1, end);
    return bst;
}

const sortedArrayToBST = nums => {
    if (nums.length === 0) return null;
    return buildBST(nums, 0, nums.length - 1);
}

console.log(sortedArrayToBST([123]));