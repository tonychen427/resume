// Permutation 
//    1. order does matter
//    2. all the possible order

// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const helper = (nums, list, result) => {
    // sanity check
    if (list.length === nums.length) { console.log(list.slice());  result.push(list.slice()); }

    // core logic
    for (let i = 0; i < nums.length; i++) {
        if (list.includes(nums[i])) { continue; } // if the number already include in the subset then dont push to list again
        list.push(nums[i]);
        helper(nums, list, result );
        list.pop();
    }
}
const permute = nums => {
    // sanity check
    if (nums === null || nums.length === 0) return [];

    // create an empty result array
    let result = [];

    // base logic
    helper(nums, [], result);
    
    // return
    return result;
};

console.log(permute([1,2,3]));

const dfs = (str, list, result) => {
    if (str.length === list.length) { result.push(list.slice().join()); }

    for (let i = 0; i < str.length; i++) {
        if (list.includes(str[i])) { continue; } ;
        list.push(str[i]);
        dfs(str, list, result);
        list.pop();
    }
}

const permutation = str => {
    if (str.length === 0) return [];

    let result = [];
    dfs(str, [], result);
    return result;
}

console.log(permutation('abc'));


const dfs2 = (str, list, result) => {
    if (str.length === list.length) { result.push(list.slice()); }
    for (let i = 0; i < str.length; i++) {
        if (list.includes(str[i])) { continue; }
        list.push(str[i]);
        dfs2(str, list, result);
        list.pop();
    }
}
const permutation2 = str => {
    if (str.length === 0) { return []; }
    let result = [];
    dfs2(str, [], result);
    return result;
}

console.log(permutation2('abcd'));



const helper2 = (nums, subSet, result) => {
    if (subSet.length === nums.length) { result.push(subSet.slice()); }
    for (let i = 0; i < nums.length; i++) {
        if (subSet.includes(nums[i])) continue;
        subSet.push(nums[i]);
        helper(nums, subSet, result);
        subSet.pop();
    }
}
const permute2 = nums => {
    if (nums === null)  return nums;
    
    let result = [];
    helper2(nums, [], result);
    return result;
}

console.log(permute2('123'));
