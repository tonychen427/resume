// Given a binary tree, return the preorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,2,3]

function TreeNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

const preorderTraversal = root => {
    let result = [];
    const traversal = node => {
        if (node === null) return result;
        result.push(node.val);
        traversal(node.left);
        traversal(node.right);
    }
    traversal(root);
    return result;
}

console.log(preorderTraversal(null));


// preorder without recusion
const preOrderTraversal = root => {
    let stack = [];
    let inorder = [];

    stack.push(root);
    while (stack.length > 0) {
        let node = stack.pop();
        inorder.push(node.val);
        if (node.right !== null) { stack.push(node.right); }
        if (node.left !== null) { stack.push(node.left); }
    }
    return inorder;
}

const tn1 = new TreeNode(1);
const tn2 = new TreeNode(2);
const tn3 = new TreeNode(3);
const tn4 = new TreeNode(4);
const tn5 = new TreeNode(5);

tn1.left = tn2;
tn1.right = tn3;
tn2.left = tn4;
tn2.right = tn5;

//       1
//      / \
//     2   3
//    / \
//   4   5

console.log(preOrderTraversal(tn1));