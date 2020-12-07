/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    for(let i = 0; i < A.length; i++) {
        if (A[i][0] === 0) {
            for(let j = 0; j < A[0].length; j++) {
                A[i][j] = A[i][j] === 0 ? 1 : 0;
            }
        }
    }

    let res = 0;
    for(let i = 0; i < A[0].length; i++) {
        let count = 0;
        for(let j = 0; j < A.length; j++) {
            if (A[j][i] === 1) {
                count += 1;
            }
        }
        if (count <= A.length / 2) {
            count = A.length - count;
        }
        res += count * Math.pow(2, A[0].length - i - 1);
    }
    return res;
};