// Example 1:
// Input:
//      1
//     /
//    2
// Output:
// [["", "1", ""],
//  ["2", "", ""]]
// Example 2:
// Input:
//      1
//     / \
//    2   3
//     \
//      4
// Output:
// [["", "", "", "1", "", "", ""],
//  ["", "2", "", "", "", "3", ""],
//  ["", "", "4", "", "", "", ""]]

// 1.allocate empty array with "";
// 2.DFS through the tree - preorder traversal
// 3.calculate the position [mid] to fill node.val;
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var getTreeMaxHeight = (root) => {
    if (root === null) return 0;
    return Math.max(getTreeMaxHeight(root.left), getTreeMaxHeight(root.right)) + 1;
}

var fill = (node, result, level, left, right) => {
    // sanity checko
    if (node === null) return;
    let mid = Math.floor((left + right) / 2);
    result[level - 1][mid] = node.val.toString();
    
    fill(node.left, result, level + 1, left, mid - 1);
    fill(node.right, result, level + 1, mid + 1, right);
}

var printTree = function(root) {
    // sanity check
    if (root === null) return root;
    
    // base logic
    let result = [];
    let maxHeight = getTreeMaxHeight(root);
    let maxWidth = Math.pow(2, maxHeight) - 1;

    for (let i = 0; i < maxHeight; i++) {
        result.push(new Array(maxWidth).fill(''));
    }
    
    fill(root, result, 1, 0, maxWidth - 1);
    return result;
};


console.log(printTree(null));