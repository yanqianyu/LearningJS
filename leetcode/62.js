/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let record = [];
    for (let i = 0; i < m; i++) {
        let tmp = [];
        for(let j = 0; j < n; j++) {
            tmp[j] = 1;
        }
        record[i] = tmp;
    }

    for (let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            record[i][j] = record[i-1][j] + record[i][j-1];
        }
    }
    return record[m-1][n-1];
};