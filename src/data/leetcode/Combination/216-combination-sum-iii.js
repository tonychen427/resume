// Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

// Note:

// All numbers will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Example 2:

// Input: k = 3, n = 9
// Output: [[1,2,6], [1,3,5], [2,3,4]]

// k = the number of combinatation set [1,2,3] [3,4,1]
// n = target number

var dfs = (nums, numSetSize, target, index, subset, result) => {
    if (target < 0) return;
    if (target === 0 && subset.length === numSetSize) { result.push(subset.slice()); return; }

    for (let i = index; i < nums.length; i++) {
        subset.push(nums[i]);
        dfs(nums,numSetSize, target - nums[i], i + 1, subset, result);
        subset.pop();
    }
}
var combinationSum3 = function(numSetSize, target) {
    if (numSetSize === 0 || target === 0) { return []; }

    let result = [];
    dfs([1,2,3,4,5,6,7,8,9], numSetSize, target, 0, [], result);
    return result;
};

console.log(combinationSum3(3,9));