/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, k) {
    let left = 0, right = 0;
    let res = 0;
    while(right < A.length) {
        if (A[right] === 0) {
            if (k == 0) {
                // left右移直到少一个0
                while(A[left] == 1) {
                    left++;
                }
                left++;
            }
            else {
                k--;
            }
        }
        res = Math.max(res, right - left + 1);
        right++;
    }
    return res;
};