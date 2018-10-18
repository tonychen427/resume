// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const twoSum = (nums, target) => {
    // sanity check
    if (nums === null) { return []; }
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let counter = target - current;
        if (map[current] === undefined) {
            map[counter] = i;
        } else {
            return [map[current], i];
        }
    }
}
console.log(twoSum([2, 7, 11, 15],9));