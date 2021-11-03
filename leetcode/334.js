/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var increasingTriplet = function(nums) {
     let a = Number.MAX_VALUE, b = Number.MAX_VALUE;
     for(let n of nums) {
         if (n <= a) {
             a = n;
         }
         else if (n <= b) {
             b = n;
         } else {
             return true;
         }
     }
     return false;
};