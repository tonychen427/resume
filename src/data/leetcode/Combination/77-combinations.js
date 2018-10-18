// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// Example:

// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

const helper = (nums, target, startIndex, combination, result) => {
    // sanity check
    if (combination.length === target) { result.push(combination.slice()); }
    // core logic 
    for (let i = startIndex; i < nums.length; i++) {
        combination.push(nums[i]);
        helper(nums, target, i + 1, combination, result) ;
        combination.pop();
    }
}

var combine = function(n, k) {
    // sanity check
    if (n === 0 || k === 0) { return []}
    
    let result = [];
    let nums = [];
    for (let i = 1; i <= n; i++) { nums.push(i); }
    
    helper(nums, k, 0, [], result);
    return result;
};

const dataArray = 4;
const target = 2;

console.log(combine(dataArray,target));

const dfs = (nums, target, start, combination, result) => {
    //sanity check
    if (combination.length === target) { result.push(combination.slice()); }

    for (let i = start; i < nums.length; i++) {
        combination.push(nums[i]);
        dfs(nums, target, i + 1, combination, result);
        combination.pop();
    }
}

const backtracking = (nums, target) => {
    if (nums === null || target < 1) return [];
    let result = [];
    dfs(nums, target, 0, [], result);
    return result;
}

console.log(backtracking([1,2,3,4], 3))
console.log(backtracking(null, 0))