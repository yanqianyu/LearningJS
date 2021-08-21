/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
 var superEggDrop = function(K, N) {
    let dp = new Array(N + 1).fill(0).map(i => new Array(K + 1).fill(0));
    let m = 0;
    while(dp[m][K] < n) {
        m += 1;
        for(let k = 1; k <= K; k++) {
            dp[m][k] = dp[m-1][k-1] + 1 + dp[m-1][k];
        }
    }
    return m;
};