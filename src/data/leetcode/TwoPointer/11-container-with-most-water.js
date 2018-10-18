// Given n non-negative integers a1, a2, ..., an , 
// where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints 
// of line i is at (i, ai) and (i, 0). Find two lines, which 
// together with x-axis forms a container, such that the 
// container contains the most water.

// Note: You may not slant the container and n is at least 2.

/**
 * @param {number[]} height
 * @return {number}
 */

const findSizeContainer = (left, right , range) => {
    return Math.min(left, right) * range;
}
var maxArea = function(height) {
    let max = 0;
    let start = 0;
    let end = height.length - 1;
    
    while (start < end) {
        let newArea = findSizeContainer(height[start], height[end], end - start);
        if (max < newArea) { max = newArea; }
        
        if (height[end] - height[start] > 0) {
            start ++
        } else {
            end --;
        }
    }
    return max
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));