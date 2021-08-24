/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
 var findCheapestPrice = function(n, flights, src, dst, K) {
     let dp = new Array(n).fill(0).map(i => new Array(K + 2).fill(Number.MAX_VALUE));
     for(let k = 0; k <= K + 1; k++) {
         dp[src][k] = 0;
     }
     for(let k = 1; k <= K + 1; k++) {
         for(let flight of flights) {
             if (dp[flight[0]][k-1] !== Number.MAX_VALUE) {
                 dp[flight[1]][k] = Math.min(dp[flight[1]][k], dp[flight[0]][k-1] + flight[2]);
             }
         }
     }
     return dp[dst][K + 1] === Number.MAX_VALUE ? -1 : dp[dst][K + 1];
};