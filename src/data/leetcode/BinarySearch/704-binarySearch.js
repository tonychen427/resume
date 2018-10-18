// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

const search = (nums, target) => {
    let start = 0, end = nums.length - 1, middle;
    while (start < end) {
        middle = Math.floor((start+end) / 2);
        if (nums[middle] === target) { return middle; }
        if (nums[middle] < target) {
            start = middle + 1;
        } else { 
            end = middle - 1;
        }
    }
    return -1;
}
console.log(search([1,2,3,4,5,6], 9));