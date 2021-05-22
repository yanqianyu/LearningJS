/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var xorGame = function(nums) {
     let s = 0;
     for(let i = 0; i < nums.length; i++) {
         s ^= nums[i];
     }

     if (s === 0) {
         return true;
     }

     return !((nums.length) & 1);
};