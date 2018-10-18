// Given a collection of numbers that might contain duplicates, 
// return all possible unique permutations.

// Example:

// Input: [1,1,2]
// Output:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]

function dfs(nums, current, visited, result) {
  if(current.length === nums.length) {
      result.push(current);
      return;
  }
  for (let i = 0; i < nums.length; i++) {
      if (visited[i] || (i > 0 && nums[i] === nums[i-1] && !visited[i-1])){
          continue;
      }
      visited[i] = true; 
      dfs(nums, current.concat(nums[i]), visited, result);
      visited[i] = false;
  }
}

var permuteUnique = function(nums) {
  let result = [];
  let visited = new Array(nums.length).fill(false);
  nums.sort((a, b) => a - b);
  dfs(nums, [], visited, result);
  return result;
};

console.log(permuteUnique([1,2,3]));