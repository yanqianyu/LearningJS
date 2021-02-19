/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var minKBitFlips = function(A, K) {
    const n = A.length;
    const diff = new Array(n + 1).fill(0);
    let ans = 0, revCnt = 0;
    for(let i = 0; i < n; i++) {
        revCnt += diff[i];
        if ((A[i] + revCnt) % 2 === 0) {
            // 当前元素实际为0，需要翻转区间[i, i + k - 1];
            if ((i + K) > n) {
                return -1;
            }
            ans++;
            revCnt++;
            diff[i + K]--;
        }
    }
    return ans;
};