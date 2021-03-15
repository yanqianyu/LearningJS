/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
     let up = 0, bottom = matrix.length - 1;
     let left = 0, right = matrix[0].length - 1;
    
     let res = [];
     while(true) {
         for(let i = left; i <= right; i++) {
             res.push(matrix[up][i]);
         }

         up += 1;
         if (up > bottom) {
             break;
         }

         for(let i = up; i <= bottom; i++) {
             res.push(matrix[i][right]);
         }

         right -= 1;
         if(right < left) {
             break;
         }

         for(let i = right; i >= left; i--) {
             res.push(matrix[bottom][i]);
         }

         bottom -= 1;
         if (bottom < up) {
             break;
         }

         for(let i = bottom; i >= up; i--) {
             res.push(matrix[i][left]);
         }

         left += 1;
         if (left > right) {
             break;
         }
     }
     return res;
};