/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
     if (!grid || grid.length === 0 || grid[0].length === 0) {
         return 0;
     }
     let res = 0;
     for(let i = 0; i < grid.length; i++) {
         for(let j = 0; j < grid[0].length; j++) {
             if (grid[i][j] === '1') {
                 res += 1;
                 dfs(grid, i, j);
             }
         }
     }
     return res;
};

function dfs(grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
        return;
    }
    if (grid[i][j] === '1') {
        grid[i][j] = '2';
        dfs(grid, i - 1, j);
        dfs(grid, i, j - 1);
        dfs(grid, i + 1, j);
        dfs(grid, i, j + 1);
    }
}