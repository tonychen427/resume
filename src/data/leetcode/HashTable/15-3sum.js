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

const twoSum = (nums, leftIndex, rightIndex, targetIndex, subSet, result) => {
    while ( leftIndex < rightIndex ) {
        let leftValue = nums[leftIndex];
        let rightValue = nums[rightIndex];
        let targetValue = -nums[targetIndex];
        if (leftValue + rightValue === targetValue) {
  
            result.push([-targetValue, leftValue,rightValue]);
            leftIndex++;
            rightIndex--;

            while (leftIndex < rightIndex && nums[leftIndex] === nums[leftIndex - 1]) {
                leftIndex++;
            }

            while (leftIndex < rightIndex && nums[rightIndex] === nums[rightIndex + 1]) {
                rightIndex--;
            }
        } else if ( leftValue + rightValue < targetValue) {
            leftIndex++;
        } else {
            rightIndex--;
        }
    }
}
var threeSum = function(nums) {
    if (nums === null) return [];

    let result = [];
    nums.sort((a, b) => a - b);

    // a + b + c = 0 || a + b = -c
    for (let i = 0 ; i < nums.length -2; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }


        let left = i + 1;
        let right = nums.length - 1;
        let target = i;

        // console.log('left: ' + left + ', right: ' + right + ', target: ' + target);
        twoSum(nums, left, right, target, [], result);
    }
    return result;
};

let data = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(data));
console.log(threeSum([-2,0,0,2,2]));



