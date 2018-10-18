// mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// But the following [1,2,2,null,3,null,3] is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3

const reverseHelper = head => {
    if (head === null) return head;
    let temp = head.left;
    head.left = reverseHelper(head.right);
    head.right = reverseHelper(temp);
    return head;
}
const sameTree = (node1, node2) => {
    if (node1 === null && node2 === null) {
        return true;
    }
    if ((node1 !== null && node2 === null) || (node1 === null && node2 !== null)) {
        return false;
    }
    if (node1.val !== node2.val) {
        return false;
    }
    return sameTree(node1.left, node2.left)  && sameTree(node1.right, node2.right);
}

var isSymmetric = function(root) {  
    if (root === null) return true;
    let reverseTree = reverseHelper(root.left);
    return sameTree(reverseTree, root.right);
}

console.log(isSymmetric(null));