/**
 * @param {number[][]} box
 * @return {number}
 */
var pileBox = function(box) {
    box.sort((a, b) => a[0] != b[0] ? a[0] - b[0] : ((a[1] != b[1] ? a[1] - b[1]: a[2] - b[2])));
    let dp = new Array(box.length);
    let res = 0;
    for(let i = 0; i < box.length; i++) {
        dp[i] = box[i][2];
        for(let j = 0; j < i; j++) {
            if (box[i][0] > box[j][0] && box[i][1] > box[j][1] && box[i][2] > box[j][2]) {
                dp[i] = Math.max(dp[i], box[i][2] + dp[j]);
            }
        }
        res = Math.max(res, dp[i]);
    }
    return res;
};