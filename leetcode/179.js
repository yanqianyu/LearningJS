/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
     if (nums.every(v => v == 0)) {
         return '0';
     }
     return nums.sort((a,b) => `${b}${a}` - `${a}${b}`).join('');
};