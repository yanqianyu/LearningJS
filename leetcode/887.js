/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
 var superEggDrop = function(K, n) {
    let dp = new Array(n + 1).fill(0).map(i => new Array(K + 1).fill(0));
    for(let i = 0; i <= n; i++) {
        dp[i][1] = i;
    }
     for(let i = 1; i <= n; i++) {
         for(let k = 2; k <= K; k++) {
             let res = Number.MAX_VALUE;
             for(let j = 1; j <= i; j++) {
                 res = Math.min(res, 1 + Math.max(dp[j - 1][k - 1], dp[i - j][k]));
             }
             dp[i][k] = res;
         }
     }
     return dp[n][K];
};

superEggDrop(2, 6);