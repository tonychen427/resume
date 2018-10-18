// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

// time complexity O(n^2)
const updateLandToWater = (grid, i, j) => {
    if (i< 0 || i >= grid.length || j < 0 || j>= grid[0].length || grid[i][j] !== 1) {
        return
    }
    grid[i][j] = 0;
    updateLandToWater(grid, i - 1, j);
    updateLandToWater(grid, i + 1, j);
    updateLandToWater(grid, i, j - 1);
    updateLandToWater(grid, i, j + 1);
}

var numIslands = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                count++;
                updateLandToWater(grid, i, j);
            }
        }
    }
    return count;
};

const island = [
    [0,0,0,1,1],
    [0,1,0,0,0],
    [0,1,1,0,0],
    [0,0,0,0,0],
    [0,0,0,1,1],
]

console.log(numIslands(island));

const updateIslandToWater = (grid, xcoord, ycoord) => {
    if (xcoord < 0 || xcoord >= grid.length || ycoord < 0 || ycoord >= grid[0].length || grid[xcoord][ycoord] !== 1) {
        return;
    }
    grid[xcoord][ycoord] = 0;
    updateIslandToWater(grid, xcoord - 1, ycoord);
    updateIslandToWater(grid, xcoord + 1, ycoord);
    updateIslandToWater(grid, xcoord, ycoord - 1);
    updateIslandToWater(grid, xcoord, ycoord + 1);
}
var numIslands2 = function(grid) {
    let numberIsland = 0;
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[0].length; y++) {
            if (grid[x][y] === 1) {
                numberIsland++;
                updateIslandToWater(grid, x, y);
            }
        }
    }
    return numberIsland;
}

const island2 = [
    [0,0,0,1,1],
    [0,1,0,0,0],
    [0,1,1,0,0],
    [0,0,0,0,0],
    [0,0,0,1,1],
]
console.log(numIslands2(island2));