/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let left = 0, right = nums.length - 1;
    let cur = 0;
     while(cur <= right) {
         if (nums[cur] === 0) {
             [nums[cur], nums[left]] = [nums[left], nums[cur]];
             cur += 1;
             left += 1;
         }
         else if (nums[cur] === 2) {
             [nums[cur], nums[right]] = [nums[right], nums[cur]];
             right -= 1;
         }
         else {
             cur += 1;
         }
     }
     return nums;
};