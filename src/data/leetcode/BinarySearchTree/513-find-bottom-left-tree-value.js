// Given a binary tree, find the leftmost value in the last row of the tree.

// Example 1:
// Input:

//     2
//    / \
//   1   3

// Output:
// 1
// Example 2: 
// Input:

//         1
//        / \
//       2   3
//      /   / \
//     4   5   6
//        /
//       7

// Output:
// 7
// Note: You may assume the tree (i.e., the given root node) is not NULL.
// preorder traversal - first vist the most left child and traversal back - DFS
// leve order traversal - collect all the level node vale and get the last row of frist child - not idea solution

const findBottomLeftValue = root => {
    let result;
    let maxHeight = 0;
    const preorderTraversal = (node, level) => {
        if (node === null) return node;
        if (level > maxHeight) {
            result = node.val;
            maxHeight = level;
        }
        preorderTraversal(node.left, level + 1);
        preorderTraversal(node.right, level + 1);
    }
    preorderTraversal(root, 1);
    return result;
}

const findBottomLeftValue2 = root => {
    // sanity check
    if (root === null) return [];
    let result;
    let queue = [root];
    while(queue.length > 0) {
        let size = queue.length;
        let current = [];
        for (let i = 0; i < size; i++) {
            let head = queue.shift();
            current.push(head.val);
            if (head.left !== null) { queue.push(head.left); }
            if (head.right !== null) { queue.push(head.right); }
        }
        result.push(current);
    }
    return result[result.length - 1][0];
}

console.log(findBottomLeftValue2(null));
console.log(findBottomLeftValue(null));