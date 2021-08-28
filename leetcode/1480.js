/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
     let res = new Array(nums.length);
     res[0] = nums[0];
     for(let i = 1; i < nums.length; i++) {
         res[i] = res[i-1] + nums[i];
     }
     return res;
};