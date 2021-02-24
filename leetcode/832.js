/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    let m = A.length, n = A[0].length;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n / 2; j++) {
            [A[i][j], A[i][n - j - 1]] = [A[i][n - j - 1], A[i][j]];
        }
        for(let j = 0; j < n; j++) {
            A[i][j] ^= 1;
        }
    }
    return A;
};