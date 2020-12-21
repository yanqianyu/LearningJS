/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let dp = new Array(cost.length + 1);
    dp[0] = 0;
    dp[1] = cost[0];
    for(let i = 2; i < cost.length; i++) {
        dp[i] = cost[i - 1] + Math.min(dp[i-1], dp[i-2]);
    }

    return Math.min(dp[cost.length], dp[cost.length - 1]);
};

