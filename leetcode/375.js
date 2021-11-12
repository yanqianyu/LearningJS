/**
 * @param {number} n
 * @return {number}
 */
 var getMoneyAmount = function(n) {
     let dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
     for(let i = n - 1; i >= 1; i--) {
         for(let j = i + 1; j <= n; j++) {
             let minCost = Number.MAX_VALUE;
             for(let k = i; k < j; k++) {
                 let cost = k + Math.max(dp[i][k - 1], dp[k + 1][j]);
                 minCost = Math.min(minCost, cost);
             }
             dp[i][j] = minCost;
         }
     }
     return dp[1][n];
};