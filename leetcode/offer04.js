/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
    if (!matrix || matrix.length === 0) {
        return false;
    }
    let m = matrix.length, n = matrix[0].length;
    let row = 0, col = n - 1;
    while(row < m && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        }
        else if (matrix[row][col] < target) {
            row++;
        }
        else {
            col--;
        }
    }
    return false;
};