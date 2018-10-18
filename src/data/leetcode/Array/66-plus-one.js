// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
    let result = [];
    let current = 0;
    let carryOver = 0;
    for (let i = digits.length - 1; i >= 0; i--) {
        current = digits[i] + carryOver;
        if (i ===  digits.length - 1) {
            current = current + 1;
        }
        if (Math.floor(current / 10) > 0) {
            carryOver = Math.floor(current / 10);
            result.unshift(current % 10);
        } else {
            result.unshift(current);
            carryOver = 0;
        }
    }
    if (carryOver > 0) {
        result.unshift(carryOver);
    }
    return result;
}; 
console.log(plusOne([9,9]));