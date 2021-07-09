/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
     let candiate = -1;
     let count = 0;
     for(const num of nums) {
         if (count === 0) {
             candiate = num;
         }
         if (num === candiate) {
             count ++;
         }
         else {
             count--;
         }
     }
     count = 0;
     const length = nums.length;
     for(const num of nums) {
         if (num === candiate) {
             count ++;
         }
     }
     return count * 2 > length ? candiate : -1;
};