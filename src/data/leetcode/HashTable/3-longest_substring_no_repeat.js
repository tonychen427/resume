// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */

// time complexity O(n)
var lengthOfLongestSubstring = function(s) {
   let lookup = {};
   let start = 0;
   let max = 0;
   for (let i = 0 ; i < s.length; i++) {
       if (lookup[s[i]] !== undefined && lookup[s[i]] >= start) {
           start = lookup[s[i]] + 1;
       }

       lookup[s[i]] = i;
       max = Math.max(max, i - start + 1);
   }
   return max;
};


console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('abba'));
console.log(lengthOfLongestSubstring('raceracecar'));
console.log(lengthOfLongestSubstring('obamacare'));