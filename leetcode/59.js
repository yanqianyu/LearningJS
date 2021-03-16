/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
    let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let up = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;
   
    let k = 1;
    while(true) {
        for(let i = left; i <= right; i++) {
            matrix[up][i] = k;
            k += 1;
        }

        up += 1;
        if (up > bottom) {
            break;
        }

        for(let i = up; i <= bottom; i++) {
            matrix[i][right] = k;
            k += 1;
        }

        right -= 1;
        if(right < left) {
            break;
        }

        for(let i = right; i >= left; i--) {
            matrix[bottom][i] = k;
            k += 1;
        }

        bottom -= 1;
        if (bottom < up) {
            break;
        }

        for(let i = bottom; i >= up; i--) {
            matrix[i][left] = k;
            k += 1;
        }

        left += 1;
        if (left > right) {
            break;
        }
    }
    return matrix;
};