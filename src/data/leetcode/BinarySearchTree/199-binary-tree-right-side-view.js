// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example:

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---


const rightSideView = root => {
    if (root === null) { return []; }
    let result = [];
    let queue = [root];
    while (queue.length > 0) {
        let size = queue.length;
        let current = [];
        for (let i = 0; i < size; i++) {
            let head = queue.shift();
            current.push(head.val);
            if (head.left !== null) { queue.push(head.left); }
            if (head.right !== null) { queue.push(head.right); }
        }
        result.push(current[current.length - 1]);
    }
    return result;
}

console.log(rightSideView(null));
