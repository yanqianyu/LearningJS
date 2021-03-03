/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let dp = new Array(num + 1).fill(0);
    if (num === 0) {
        return dp;
    }
    dp[1] = 1;
    if (num === 1) {
        return dp;
    }
    
    for(let i = 2; i <= num; i++) {
        dp[i] = i % 2 + dp[i >> 1];
    }
    return dp;
};