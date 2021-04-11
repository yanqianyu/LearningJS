/**
 * @param {number} n
 * @return {number}
 */
 var nthUglyNumber = function(n) {
     let n2 = 0, n3 = 0, n5 = 0;
     let dp = new Array(n);
     dp[0] = 1;
     for(let i = 1; i < n; i++) {
         dp[i] =  Math.min(2*dp[n2],Math.min(3*dp[n3],5*dp[n5]));
         if (dp[i] === 2 * dp[n2]) {
             n2 += 1;
         }
         if (dp[i] === 3 * dp[n3]) {
             n3 += 1;
         }
         if (dp[i] === 5 * dp[n5]) {
             n5 += 1;
         }
     }
     return dp[n - 1];
};