/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 var search = function(nums, target) {
     let low = 0, high = nums.length - 1;
     while(low <= high) {
         while(low < high && nums[low] == nums[low + 1]) {
             low += 1;
         }
         while(low < high && nums[high] == nums[high - 1]) {
             high -= 1;
         }
         let mid = Math.floor((low + high) / 2);
         if (nums[mid] === target) {
             return true;
         }

         if (nums[mid] >= nums[low]) {
             if (target < nums[mid] && target >= nums[low]) {
                 high = mid - 1;
             }
             else {
                 low = mid + 1;
             }
         }
         else {
            if (target > nums[mid] && target <= nums[high]) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
         }
     }
     return false;
};