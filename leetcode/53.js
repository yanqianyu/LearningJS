/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
     let len = nums.length;
     let res = nums[0]; 
     let pre = nums[0]; // f[i-1]
     for(let i = 1; i < len; i++) {
         // f[i] = Math.max(nums[i], f[i-1] + nums[i]);
         pre = Math.max(nums[i], pre + nums[i]);
         res = Math.max(res, pre);
     }
     return res;
};