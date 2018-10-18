// Given a tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right child.

// Example 1:
// Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]

//        5
//       / \
//     3    6
//    / \    \
//   2   4    8
//  /        / \ 
// 1        7   9

// Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var increasingBST = function(root) {
    let result = [];
    const traversal = head => {
        if (head === null) return head;
        traversal(head.left);
        result.push(head.val);
        traversal(head.right);
    }
    traversal(root);
    
    let dummyTree = new TreeNode(0);
    let current = dummyTree;
    for (let i = 0; i < result.length; i++) {
        current.right = new TreeNode(result[i]);
        current = current.right;
    }
    return dummyTree.right;
}

const n1 = new TreeNode(3);
const n2 = new TreeNode(9);
const n3 = new TreeNode(20);
const n4 = new TreeNode(15);
const n5 = new TreeNode(7);

n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;

console.log(increasingBST(n1));