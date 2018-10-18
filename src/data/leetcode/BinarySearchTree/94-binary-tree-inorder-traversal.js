// Given a binary tree, return the inorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,3,2]

function TreeNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}
var inorderTraversal = function(root) {
    let result = [];
    const traversal = head => {
        if (head === null) return head;
        traversal(head.left);
        result.push(head.val);
        traversal(head.right);
    }
    traversal(root);
    return result;
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

console.log(inorderTraversal(tn1));

// -- InOrder Traversal without recursion
//
// 1) Create an empty stack S.
// 2) Initialize current node as root
// 3) Push the current node to S and set current = current->left until current is NULL
// 4) If current is NULL and stack is not empty then 
//      a) Pop the top item from stack.
//      b) Print the popped item, set current = popped_item->right 
//      c) Go to step 3.
// 5) If current is NULL and stack is empty then we are done.

const inorderTraversal2 = (root) => 
{
    let stack = [];
    let inorder =[];
    while (true)
    {
        while (root != null)
        {
            stack.push(root);
            root = root.left;
        }
        if (stack.length === 0) break;
        root = stack.pop();
        inorder.push(root.val);
        root = root.right;
    }
    return inorder;
}

console.log(inorderTraversal2(tn1));