/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    let row = nums.length, col = nums[0].length;
    if (row * col !== r * c) {
        return nums;
    }
    let arr = new Array(r);
    for(let i = 0; i < r; i++) {
        arr[i] = new Array(c);
    }

    let k = 0;
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            let m = Math.floor(k / c);
            let n = k % c;
            k += 1;
            arr[m][n] = nums[i][j];
        }
    }
    return arr;
};