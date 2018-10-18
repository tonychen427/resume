// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//
// For example, given n = 3, a solution set is:
//
//   [
//     "((()))",
//     "(()())",
//     "(())()",
//     "()(())",
//     "()()()"
//   ]

/**
 * @param {number} n
 * @return {string[]}
 */
 const buildParenthesis = (left, right, subset, result) => {
     if (right < left) return;

     if (right === null && left === null) return result.push(subset.slice());

     if (left !== null) buildParenthesis(left - 1, right, '(', result);
     if (right !== null) buildParenthesis(left, right - 1, ')', result);
 }
 const generateParenthesis = number => {
     if (number === null || number === 0) return [];

     let result = [];
     buildParenthesis(number, number, [], result);
     return result;
 }

 console.log(generateParenthesis(3));