/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxValue = function(grid) {
     let m = grid.length, n = grid[0].length;
     let profits = new Array(m).fill(1).map((e) => new Array(n).fill(0));
     profits[0][0] = grid[0][0];
     for(let i = 1; i < n; i++) {
         profits[0][i] = profits[0][i - 1] + grid[0][i];
     }
     for(let j = 1; j < m; j++) {
         profits[j][0] = profits[j - 1][0] + grid[j][0];
     }

     for(let i = 1; i < m; i++) {
         for(let j = 1; j < n; j++) {
             profits[i][j] = grid[i][j] + Math.max(profits[i][j - 1], profits[i - 1][j]);
         }
     }
     return profits[m - 1][n - 1];
};