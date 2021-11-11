/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var smallestRangeII = function(nums, k) {
     nums.sort((a, b) => a - b);
     let n = nums.length;
     let res = nums[n - 1] - nums[0];
     for(let i = 1; i < n; i++) {
         let min = Math.min(nums[0] + k, nums[i] - k);
         let max = Math.max(nums[n - 1] - k, nums[i - 1] + k);
         res = Math.min(max - min, res);
     }
     return res;
};