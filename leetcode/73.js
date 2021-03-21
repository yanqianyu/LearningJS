/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
     for(let r = 0; r < matrix.length; r++) {
         for(let c = 0; c < matrix[r].length; c++) {
             if (matrix[r][c] !== 0) {
                 continue;
             }
             for(let i = 0; i < matrix[r].length; i++) {
                 if (matrix[r][i] !== 0) {
                     matrix[r][i] = null;
                 }
             }

             for(let i = 0; i < matrix.length; i++) {
                 if (matrix[i][c] !== 0) {
                     matrix[i][c] = null;
                 } 
             }
         }
     }

     matrix.forEach((row, r) => {
         row.forEach((col, c) => {
             if (matrix[r][c] === null) {
                 matrix[r][c] = 0;
             }
         })
     })
     return matrix;
};