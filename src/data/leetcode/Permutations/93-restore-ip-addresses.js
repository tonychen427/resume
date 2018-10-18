// Given a string containing only digits, restore it by returning all possible valid IP address combinations.

// Example:

// Input: "25525511135"
// Output: ["255.255.11.135", "255.255.111.35"]

/**
 * @param {string} s
 * @return {string[]}
 */

// function restoreIpAddresses2(s) {
//     const res = [];
//     dfs([], 0);
//     return res;
    
//     function dfs(prefix, idx) {
//       if (prefix.length === 4 && idx === s.length) {
//         res.push(prefix.join('.'));
//         return;
//       }
      
//       if (prefix.length === 4 || idx === s.length) {
//         return;
//       }
      
//       for (let r = idx; r < s.length; r++) {
//         if (r !== idx && s[idx] === '0') return;
        
//         const num = parseInt(s.slice(idx, r+1));
//         if (num > 255) {
//           return;
//         }
//         prefix.push(num);
//         dfs(prefix, r+1);
//         prefix.pop();
//       }
//     }
//   }


const dfs = (str, idx, combinations, res) => {
    // once the combination contains 4 sets and index of string is at the end 
    // push the combination to result 
    if (combinations.length === 4 && idx === str.length) {
      res.push(combinations.join('.'));
      return;
    }
    
    if (combinations.length === 4 || idx === str.length) return;
    
    for (let i = idx; i < str.length; i++) {
      // a combination set should be less than 255
      const num = parseInt(str.slice(idx, i+1));
      if (i !== idx && str[idx] === '0') return;
      if (num > 255) return;

      combinations.push(num);
      dfs(str, i+1, combinations, res);
      combinations.pop();
    }
}
var restoreIpAddresses = function(str) {
    // sanity check
    if (str === null || str.length === 0) { return []}

    // create empty array to store result
    let result = [];

    // base logic - recursion
    dfs(str, 0, [], result);

    // result
    return result;
};

console.log(restoreIpAddresses('25525511135'));