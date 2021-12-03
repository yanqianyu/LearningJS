/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var minSubsequence = function(nums) {
     nums.sort((a, b) => a - b);
     let res = [];
     let sum = 0, temp = 0;
     for(let num of nums) {
         sum += num;
     }
     for(let i = nums.length - 1; i >= 0; i--) {
         res.push(nums[i]);
         temp += nums[i];
         if (temp > sum / 2){
             break;
         }
     }
     return res;
};