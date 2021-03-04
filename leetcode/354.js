/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    if (envelopes.length <= 1) {
        return envelopes.length;
    }
    envelopes.sort((a, b) => {
        if (a[0] > b[0]) {
            return 1;
        }
        else if (a[0] === b[0]) {
            return a[1] > b[1] ? 1: -1;
        }
        return -1;
    })

    let dp = new Array(envelopes.length).fill(1);
    let res = 0;
    for(let i = 1; i < envelopes.length; i++) {
        for(let j = 0; j < i; j++) {
            if (envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        res = Math.max(dp[i], res);
    }
    return res;
};