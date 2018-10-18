/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

var floodFill = function(image, sr, sc, newColor) {
    helper(image, sr, sc, image[sr][sc], newColor);
    return image;
};

const helper = (image, sr, sc, originalColor, newColor) => {
    if (sr < 0 || sr === image.length || sc < 0 || sc === image[sr].length || image[sr][sc] !== originalColor || image[sr][sc] === newColor) {
        return;
    }
    image[sr][sc] = newColor;
    helper(image, sr - 1, sc, originalColor, newColor);
    helper(image, sr + 1, sc, originalColor, newColor);
    helper(image, sr, sc - 1, originalColor, newColor);
    helper(image, sr, sc + 1, originalColor, newColor);
}

const image = [
    [0,1,1,1],
    [1,1,1,1],
    [0,0,0,0],
    [1,1,1,0],
]

console.log(floodFill(image,1,1,2));