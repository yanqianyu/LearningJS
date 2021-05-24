/**
 * @param {string} s
 * @return {number}
 */
 var strangePrinter = function(s) {
     let len = s.length;
     if (len === 0) {
         return 0;
     }

     let dp = new Array(len).fill(0).map((e) => new Array(len).fill(100000));
     for(let i = 0; i < len; i++) {
         dp[i][i] = 1;
     }

     for(let i = len - 2; i >= 0; i--) {
         for(let j = i + 1; j < len; j++) {
             dp[i][j] = 1 + dp[i + 1][j];
             for(let k = i + 1; k < j; k++) {
                 if (s[i] === s[k]) {
                     dp[i][j] = Math.min(dp[i][j], dp[i + 1][k] + dp[k + 1][j]);
                 }
             }

             if (s[i] === s[j]) {
                 dp[i][j] = Math.min(dp[i][j], dp[i+1][j]);
             }
         }
     }
     return dp[0][len - 1];
};