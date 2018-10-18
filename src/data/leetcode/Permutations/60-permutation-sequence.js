// The set [1,2,3,...,n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

// Note:

// Given n will be between 1 and 9 inclusive.
// Given k will be between 1 and n! inclusive.
// Example 1:

// Input: n = 3, k = 3
// Output: "213"
// Example 2:

// Input: n = 4, k = 9
// Output: "2314"

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const dfs = (nums, list, result) => {
    // sanity check
    if (list.length === nums.length) { result.push(list.join('')); }

    // core logic
    for (let i = 0; i < nums.length; i++) {
        if (list.includes(nums[i])) { continue; }
        list.push(nums[i]);
        dfs(nums, list, result );
        list.pop();
    }
}

var getPermutation = function(n, k) {
    // sanity check
    if (n === 0 || k === 0) return [];
    
    let result = [];
    let uniquePermutation = [];
    for (let i = 1; i <= n; i++) {
        uniquePermutation.push(i);
    }
    
    dfs(uniquePermutation, [], result);
    
    return result[k - 1];
};

console.log(getPermutation(3,3));
console.log(getPermutation(4,9));