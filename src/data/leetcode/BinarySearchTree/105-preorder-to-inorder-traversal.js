// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7
const TreeNode = (val) => {
    this.val = val;
    this.left = null;
    this.right = null;
}
const p2iHelper = (preorder, pStart, pEnd, inorder, iStart, iEnd) => {
    if (iStart > iEnd) return null;
    let value = preorder[pStart];
    let root = new TreeNode(value);
    let position = inorder.indexOf(value); // found out where is the value index in the iorder arrary
    root.left = p2iHelper(preorder, pStart + 1, pStart + position - iStart, inorder, iStart, position - 1);
    root.right =  p2iHelper(preorder, position - iEnd + pEnd + 1, pEnd, inorder, position + 1 , iEnd);
    return root;
}
const buildTree = (preorder, inorder) => {
    // sanity check
    if (preorder.length !== inorder.length) return null;
    
    //base logic
    return p2iHelper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
}

console.log(buildTree(null,null));