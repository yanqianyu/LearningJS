/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    let res = [];
    let pre = 0;
    for(let i = 0; i < A.length; i++) {
        pre = (pre << 1 | A[i]) % 10;
        if (pre % 5 === 0) {
            res.push(true);
        }
        else {
            res.push(false);
        }
    }
    return res;
};