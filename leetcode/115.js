/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
 var numDistinct = function(s, t) {
     let m = s.length, n = t.length;
     let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
     for(let i = 0; i <= m; i++) {
         dp[i][0] = 1;
     }

     for(let i = 1; i <= m; i++) {
         for(let j = 1; j <= n; j++) {
             if (j > i) {
                 continue;
             }
             if (s[i - 1] === t[j - 1]) {
                 dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
             }
             else {
                 dp[i][j] = dp[i-1][j];
             }
         }
     }
     return dp[m][n];
};