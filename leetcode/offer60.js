/**
 * @param {number} n
 * @return {number[]}
 */
 var dicesProbability = function(n) {
     let num = n * 6;
     let dp = [];
     for(let i = 0; i <= n; i++) {
         dp.push(new Array(num + 1).fill(0));
     }

     for(let i = 1; i <= 6; i++) {
         dp[1][i] = 1;
     }

     for(let i = 2; i <= n; i++) {
         for(let j = i; j <= 6 * i; j++) {
             for(let k = 1; k <= 6; k++) {
                 if (k - j >= 0) {
                     break;
                 }
                 dp[i][j] += dp[i - 1][j - k];
             }
         }
     }

     let all = Math.pow(6, n);
     let result = [];
     for(let i = n; i <= num; i++) {
         result.push(dp[n][i] * 1.0 / all);
     }
     return result;
};