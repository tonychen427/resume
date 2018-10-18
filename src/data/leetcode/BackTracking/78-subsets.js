// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

// time = O(2^n)
// space = O(n)

const dfs = (nums, startIndex, list, result) => {
    // sanity check and return the data to stop the recursion
    if(startIndex === nums.length) { result.push(list.slice()); return; }

    // core logic
    
    dfs(nums, startIndex + 1, list, result);
    list.push(nums[startIndex]);
    dfs(nums, startIndex + 1, list, result);
    list.pop();
}

var subsets = function(nums) {
    // sanity check
    if (nums === null || nums.length === 0) return [];

    let result = [];

    // depth first search
    dfs(nums, 0, [], result);

    // return subset;
    return result;
};

console.log(subsets([1,2,3]));

// -------------------------------------------
// [
//  [],
//  [3],
//  [2],
//  [2,3],
//  [1],
//  [1,3]
//  [1,2]
//  [1,2,3],
// ]
const dfs2 = (nums, startIndex, subset, result) =>{
    result.push(subset.slice());
    for (let i = startIndex; i < nums.length; i++) {
        subset.push(nums[i]);
        dfs2(nums, startIndex, subset, result);
        subset.pop();
    }
}
const subset2 = nums => {
    if (nums === null || nums.length === 0)  return [];
    
    let result = [];
    dfs2(nums, 0, [], result);
    return result;
}

console.log(subset2([1,2,3]));