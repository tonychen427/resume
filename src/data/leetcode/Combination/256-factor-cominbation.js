// Problem:

// Numbers can be regarded as product of its factors. For example, 

// 8 = 2 x 2 x 2;
//   = 2 x 4.
// Write a function that takes an integer n and return all possible combinations of its factors. 

// Note: 

// Each combination's factors must be sorted ascending, for example: The factors of 2 and 6 is [2, 6], not [6, 2]. 
// You may assume that n is always positive. 
// Factors should be greater than 1 and less than n.
 

// Examples: 
// input: 1
// output: 

// []
// input: 37
// output: 

// []
// input: 12
// output:

// [
//   [2, 6],
//   [2, 2, 3],
//   [3, 4]
// ]
// input: 32
// output:

// [
//   [2, 16],
//   [2, 2, 8],
//   [2, 2, 2, 4],
//   [2, 2, 2, 2, 2],
//   [2, 4, 4],
//   [4, 8]
// ]

const dfs = (target, index, subset, result) => {
    if (target === 1 && subset.length > 1) { result.push(subset.slice()); }

    for (let i = index; i <= target; i++) {
        if (target % i === 0) {
            subset.push(i);
            dfs(target/i, i, subset, result);
            subset.pop();
        }
    }
}
const getFactors = target => {
    if (target === null || target === 0) return [];

    const result = [];
    dfs(target, 2, [], result);
    return result;
}

console.log(getFactors(12));

// ---------------------------------------------

const dfs2 = (target, index, subset, result) => {
    if (target === 1 && subset.length > 1) {
        result.push(subset.slice());
    }
    for (let i = index; i < target; i++) {
        if (target % i === 0) {
            subset.push(i);
            dfs2(target / i, i, subset, result);
            subset.pop();
        }
    }
}
const getFactors2 = target => {
    if (target === null || target === 0) return [];

    let result = [];
    dfs2(target, 2, [], result);
    return result;
}

console.log(getFactors2(12));
