/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
     let low = 0, high = nums.length-1;
     while(low < high) {
         let sum = nums[low] + nums[high];
         if(sum === target) {
             return [nums[low], nums[high]];
         }
         else if (sum > target) {
             high--;
         }
         else {
             low ++;
         }
     }
     return [];
};