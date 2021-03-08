/**
 * @param {string} s
 * @return {number}
 */
 var minCut = function(s) {
     let dp = [];
     dp[0] = 0;
     for(let i = 1; i < s.length; i++) {
         dp[i] = dp[i - 1] + 1;
         for(let j = i - 1; j >= 0; j--) {
             let isPali = true;
             for(let k = j; k < (i + j) / 2; k++) {
                 if (s[k] !== s[i + j - k]) {
                     isPali = false;
                     break;
                 }
             }

             if (isPali) {
                 if (j === 0) {
                     dp[i] = 0;
                 }
                 else {
                     dp[i] = Math.min(dp[i], dp[j - 1] + 1);
                 }
             }
         }
     }
     return dp[s.length - 1];
};