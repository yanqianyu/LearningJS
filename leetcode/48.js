/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if (!matrix) {
        return matrix;
    }
    let row = matrix.length, col = matrix[0].length;
    for(let i = 0; i < row / 2; i++) {
        for (let j = 0; j < col; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[row - i - 1][j];
            matrix[row - i - 1][j] = temp;
        }
    }

    for (let i = 1; i < row; i++) {
        for(let j = 0; j < i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    return matrix;
};