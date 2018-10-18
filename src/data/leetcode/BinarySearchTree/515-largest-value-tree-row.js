// You need to find the largest value in each row of a binary tree.

// Example:
// Input: 
//           1
//          / \
//         3   2
//        / \   \  
//       5   3   9 

// Output: [1, 3, 9]

// level order traversal - BFS

var largestValues = function(root) {
    // sanity check
    if (root === null) return [];

    let result = [];
    let queue = [root];
    while (queue.length > 0){
        let size = queue.length;
        let current = [];
        for (let i = 0; i < size; i++) {
            let head = queue.shift();
            current.push(head.val);
            if (head.left !== null) { queue.push(head.left); }
            if (head.right !== null) { queue.push(head.right); }
        }
        result.push(Math.max(...current));
    }
    return result;
}
console.log(largestValues(null));