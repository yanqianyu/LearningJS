/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = function(nums, target) {
     let sum = 0;
     for(let num of nums) {
         sum += num;
     }

     if (sum < target || (sum + target) % 2 === 1) {
         return 0;
     }

     let w = (sum + target) / 2;

     let dp = new Array(w + 1).fill(0);
     dp[0] = 1;
     for(let num of nums) {
         for(let j = w; j >= num; j--) {
             dp[j] += dp[j - num];
         }
     }
     return dp[w];
};