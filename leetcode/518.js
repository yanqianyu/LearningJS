/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
 var change = function(amount, coins) {
     let dp = new Array(amount + 1).fill(0);
     dp[0] = 1;
     for(let coin of coins) {
         for(let j = 1; j <= amount; j++) {
             if (j >= coin) {
                 dp[j] = dp[j] + dp[j - coin];
             }
         }
     }
     return dp[amount];
};