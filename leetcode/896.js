/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if (A.length <= 2) {
        return true;
    }
    // 是否单调增
    let flag1 = true;
    for(let i = 1; i < A.length; i++) {
        if (A[i] < A[i - 1]) {
            flag1 = false;
        }
    }

    // 是否单调减
    let flag2 = true;
    for(let i = 1; i < A.length; i++) {
        if (A[i] > A[i - 1]) {
            flag2 = false;
        }
    }

    return flag1 || flag2;
};