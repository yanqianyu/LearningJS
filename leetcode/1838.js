/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maxFrequency = function(nums, k) {
     nums.sort((a, b) => a - b);
     let max = 0, tempSum = 0;
     for(let i = 0, j = 0; j < nums.length; j++) {
         while(nums[j] * (j - i) - tempSum > k) {
             tempSum -= nums[i++];
         }
         tempSum += nums[j];
         max = Math.max(max, j - i + 1);
     }
     return max;
};