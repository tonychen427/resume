// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]

const helper = (candidates, target, startIndex, combination, result) => {
    // sanity check 
    if (target === 0) { result.push(combination.slice()) }
    
    for (let i = startIndex; i < candidates.length; i++) {
        if (target < candidates[i]) break;
        if (i !== 0 && candidates[i] === candidates[i - 1]) continue;
        
        combination.push(candidates[i]);
        helper(candidates, target - candidates[i], i, combination, result);
        combination.pop();
    }
}

const combinationSum = (candidates, target) => {
    // sanity check
    if (target === 0) return [];
    if (candidates === null && candidates.length === 0) return [];
    
    // create result array
    let result = [];
    
    // sort candidates
    candidates.sort((a, b) => a - b);
    
    // call recursion
    helper(candidates, target, 0, [], result);
    return result;   
}

console.log(combinationSum([1,3,4], 4));
// ----------------------------------------------
const dfs = (nums, target, index, subset, result) => {
    if ( target < 0) return;
    if ( target === 0) { result.push(subset.slice()); return;}
    for (let i = index; i < nums.length; i++) {
        subset.push(nums[i]);
        dfs(nums, target - nums[i], i, subset, result);
        subset.pop();
    }
}

const combinationSum2 = (nums, target) => {
    if (nums === null || nums.length === 0 || target === 0) { return []; }
    let result = [];
    dfs(nums, target, 0, [], result);
    return result;
}

console.log(combinationSum2([1,3,4], 4));
