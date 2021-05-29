/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
 var numSubmatrixSumTarget = function(matrix, target) {
     let row = matrix.length, col = matrix[0].length;
     let prefix = new Array(row + 1).fill(0).map((e) => new Array(col + 1).fill(0));
     for(let i = 0; i < row; i++) {
         for(let j = 0; j < col; j++) {
             prefix[i + 1][j + 1] = prefix[i + 1][j] + prefix[i][j + 1] - prefix[i][j] + matrix[i][j];
         }
     }

     let res = 0;
     for (let startRow = 1; startRow <= matrix.length; startRow++) {
        for (let startColumn = 1 ; startColumn <= matrix[0].length; startColumn++) {
            for (let endRow = startRow; endRow <= matrix.length; endRow++) {
                for (let endColumn = startColumn; endColumn <= matrix[0].length; endColumn++) {
                    if (prefix[endRow][endColumn] - prefix[startRow - 1][endColumn] - prefix[endRow][startColumn - 1] + prefix[startRow - 1][startColumn - 1] == target) {
                        res++;
                    }
                }
            }
        }
    }
    return res;
};