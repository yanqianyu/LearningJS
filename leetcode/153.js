/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
     let low = 0, high = nums.length - 1;
     while(low < high) {
         let mid = (low + high) >> 1;
         if (nums[mid] <= nums[nums.length - 1]) {
             high = mid;
         }
         else {
             low = mid + 1;
         }
     }
     return nums[low];
};