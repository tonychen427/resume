
// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: [1,2,2]
// Output:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]

var dfs = function(nums,index, temp, res){
    let lastpopped
    res.push(temp.slice());
    for (let i=index;i<nums.length;i++){        
        if(nums[i] === lastpopped) { continue; }
        temp.push(nums[i]);
        dfs(nums, i + 1, temp, res);
        lastpopped = temp.pop();
    }
}

var subsetsWithDup = function(nums) {
    let result = [];
    if (nums.length === 0 && nums === null) return result;
    nums.sort((a,b) => a - b);
    dfs(nums, 0, [], result);
    return result;
};

console.log(subsetsWithDup([1,2,2]));

// --------------------------------------------

const dfs2 = (nums, index, subset, result) =>{
    result.push(subset.slice());
    for (let i = index; i < nums.length; i++){
        if (i !== index && nums[i] === nums[i-1]) continue;
        subset.push(nums[i]);
        dfs2(nums, i + 1, subset, result);
        subset.pop();
    }
}
const subsetsWithDup2 = nums => {
    if (nums === null || nums.length === 0) { return []; }
    nums.sort((a, b) =>  a - b);
    let result = [];
    dfs2(nums, 0, [], result);
    return result;
}
console.log(subsetsWithDup2([1,2,2]));