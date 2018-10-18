// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return all possible palindrome partitioning of s.

// Example:

// Input: "aab"
// Output:
// [
//   ["aa","b"],
//   ["a","a","b"]
// ]

/**
 * @param {string} s
 * @return {string[][]}
 */

const isPalidrome = str => {
    let start = 0;
    let end = str.length - 1;
    while ( start <= end) {
        if (str[start] !== str[end]) { return false}
        start++;
        end--;
    }
    return true;
}
const helper = (str, startIndex, partition, result) => {
    // sanity check
    if (startIndex === str.length) {
        result.push(partition.slice());
        return;
    }
    // core logic
    for (let i = startIndex; i < str.length; i++) {
        let subStr = str.slice(startIndex, i + 1);
        if (!isPalidrome(subStr)) {
            continue;
        }

        partition.push(subStr);
        helper(str, i + 1, partition, result);
        partition.pop();
    }
}

const partition = (str) => {
    // sanity check
    if (str === null || str.length === 0) return [];
  
    // create result array
    let result = [];

    // base logic - recursive
    helper(str, 0, [], result);

    // return
    return result;
};

console.log(partition('aab'));