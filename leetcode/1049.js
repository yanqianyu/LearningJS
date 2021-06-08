/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeightII = function(stones) {
    let sum = 0;
    for(let i = 0; i < stones.length; i++) {
        sum += stones[i];
    }

    let dp = new Array(Math.floor(sum / 2) + 1).fill(0);
    for(let i = 0; i < stones.length; i++) {
        for(let j = Math.floor(sum / 2); j >= stones[i]; j--) {
           dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
        }
    }
    return sum - 2 * dp[Math.floor(sum / 2)];
};

