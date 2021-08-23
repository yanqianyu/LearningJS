/**
 * @param {number} n
 * @return {number}
 */
 var getMaximumGenerated = function(n) {
     if (n <= 1) {
         return n;
     }
     let dp = new Array(n + );
     dp[0] = 0;
     dp[1] = 1;
     let res = 1;
     for(let i = 2; i <= n; i++) {
        let w = Math.floor(i/2);
         if (i % 2 === 1) {
             dp[i] = dp[w] + dp[w + 1];
         }
         else {
             dp[i] = dp[w];
         }
         res = Math.max(dp[i], res);
     }
     return res;
};