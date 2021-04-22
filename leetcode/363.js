/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var maxSumSubmatrix = function(matrix, k) {
     let m = matrix.length, n = matrix[0].length;
     let sum = new Array(m + 1).fill(null).map(d => new Array(n + 1).fill(0));
     for(let i = 1; i <= m; i++) {
         for(let j = 1; j <= n; j++) {
             sum[i][j] = sum[i][j - 1] + sum[i - 1][j] - sum[i - 1][j - 1] + matrix[i - 1][j - 1];
         }
     }

     let res = Number.MIN_SAFE_INTEGER;
     for (let i1 = 1; i1 <= m; i1++) {
        for (let j1 = 1; j1 <= n; j1++) {
            for (let i2 = i1; i2 <= m; i2++) {
                for (let j2 = j1; j2 <= n; j2++) {
                    const s = sum[i2][j2]-sum[i2][j1-1]-sum[i1-1][j2]+sum[i1-1][j1-1]
                    if (s<=k) res = Math.max(s, res)
                }
            }
        }
    }
    return res
};