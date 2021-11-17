/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var largestSumAfterKNegations = function(nums, k) {
     nums.sort((a, b) => a - b);
     let sum = 0;
     for(let i = 0; i < nums.length; i++) {
         if (nums[i] <= 0 && k > 0) {
             sum -= nums[i];
             nums[i] = -nums[i];
             k -= 1;
         }
         else {
             sum += nums[i];
         }
     }
     nums.sort((a, b) => a - b);
     if (k % 2 === 0) {
         return sum;
     }
     return sum - nums[0] * 2;
};