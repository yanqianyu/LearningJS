/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
 var numWays = function(steps, arrLen) {
    const M = BigInt(1e9+7)
    let dp = []
    dp[0] = 1n
    for (let step = 1; step <= steps; step++) {
        const tmp = new Array(Math.min(step+1,arrLen)).fill(0n)
        for (let i = 0; i < tmp.length; i++) {
            if (i<dp.length) tmp[i] += dp[i]
            if (i-1>=0) tmp[i] += dp[i-1]
            if (i+1<dp.length) tmp[i] += dp[i+1]
        }
        dp = tmp
    }
    return dp[0]%M
};