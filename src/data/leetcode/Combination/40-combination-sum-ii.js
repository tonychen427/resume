// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// Each number in candidates may only be used once in the combination.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const helper = (candidates, target, startIndex, combination, result) => {
    // sanity check
    if (target === 0) { result.push(combination.slice()); }

    // core logic
    for (let i = startIndex; i < candidates.length; i++) {
        if (target < candidates[i]) break;
        if (i !== startIndex && candidates[i] === candidates[i-1]) continue;
        combination.push(candidates[i]);
        helper(candidates, target - candidates[i], i + 1, combination, result);
        combination.pop();
    }
}

var combinationSum = function(candidates, target) {
    // sanity check
    if (target === 0) return [];
    if (candidates === null && candidates.length === 0) return [];

    // create empty result array
    let result = [];

    // sort candidate
    candidates.sort(( a, b) => a - b);

    // basic logic recursion
    helper(candidates, target, 0, [], result);
    
    // return
    return result;
};

console.log(combinationSum([10,1,2,7,6,1,5],8));

//----------------------------------------------
const dfs = (nums, target, index, subset, result) => {
    if (target < 0) return;
    if (target === 0) { result.push(subset.slice()); return; }

    for (let i = index; i < nums.length; i++) {
        if (i !== index && nums[i] === nums[i-1]) continue;
        subset.push(nums[i]);
        dfs(nums, target - nums[i], i + 1, subset, result);
        subset.pop();
    }
}
const combinationSum2 = (nums, target) => {
    //sanity check
    if (nums === null || nums.length === 0 || target === 0) return [];

    nums.sort((a,b) => a - b);
    let result = [];
    dfs(nums, target, 0, [], result);
    return result;
}

console.log(combinationSum2([10,1,2,7,6,1,5],8));
