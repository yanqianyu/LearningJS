/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var kthLargestValue = function(matrix, k) {
     let r = matrix.length;
     if (r === 0) {
         return 0;
     }

     let c = matrix[0].length;
     if (c === 0) {
         return 0;
     }

     let dp = new Array(r + 1).fill(0).map(e => (new Array(c + 1)).fill(0));
     let res = [];
     for(let i = 1; i <= r; i++) {
         for(let j = 1; j <= c; j++) {
             dp[i][j] = dp[i - 1][j - 1] ^ dp[i -1][j] ^ dp[i][j - 1]^matrix[i-1][j-1];
             res.push(dp[i][j]);
         }
     }
     res.sort((a, b) => b - a);
     return res[k-1];
};