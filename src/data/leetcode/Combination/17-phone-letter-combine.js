// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

/**
 * @param {string} digits
 * @return {string[]}
 */

const helper = (letters, digits, startIndex, combination, result) => {
    // sanity check
    if (startIndex === digits.length) { result.push(combination.join('')); return; }
    
    // core logic
    for (let i = 0; i < letters[digits[startIndex]].length; i++){
        const c = letters[digits[startIndex]][i];
        combination.push(c);
        helper(letters, digits, startIndex + 1 , combination, result);
        combination.pop();
    }
}
var letterCombinations = function(digits) {
    const letters = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    // sanity check
    if (digits.length === 0) return [];
        
    // create empty array to store the combinations
    let result = [];
    
    // base logice - recursive
    helper(letters, digits, 0, [], result);

    // return
    return result;
};

console.log(letterCombinations("23"));

