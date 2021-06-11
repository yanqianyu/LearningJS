/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
     let dp = new Array(n + 1).fill(Number.MAX_VALUE);
     dp[0] = 0;
     let limit = Math.floor(Math.sqrt(n));
     for(let i = 1; i <= limit; i++) {
         for(let j = 1; j <= n; j++) {
             if (j >= i * i) {
                 dp[j] = Math.min(dp[j], dp[j - i * i] + 1);
             }
         }
     }
     return dp[n];
};