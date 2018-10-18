// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// const twoSum = (nums, leftpointer, rightpointer, target, reuslt) => {
//   while(leftpointer < rightpointer) {
//     if (nums[leftpointer] + nums[rightpointer] === target) {
//       reuslt.push([nums[leftpointer], nums[rightpointer], -target]);
//       console.log(nums, leftpointer, rightpointer, target, reuslt);
//       leftpointer++;
//       rightpointer--;
//     } else if (nums[leftpointer] + nums[rightpointer] < target) {
//       leftpointer++;
//     } else {
//       rightpointer--;
//     }
//   }

// }



const twoSum = (nums, target, result) => {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
      let sum = nums[start] + nums[end];
      if(sum === target) { result.push([nums[start], nums[end] , -target]); return [start + 1,end + 1] }
      else if (sum < target) {
          start++;
      } else {
          end--;
      }
  }
  return null;
}
var threeSum = function(nums) {
    let result = [];
    nums.sort((a, b) =>  a - b );
    for (let i = 0; i < nums.length - 1; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
          continue;
      }
        twoSum(nums, -nums[i], result)
    }
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));