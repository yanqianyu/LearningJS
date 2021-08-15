/**
 * @param {number[]} nums
 * @return {string}
 */
 var minNumber = function(nums) {
     nums.sort((a, b) => (a + '' + b) - (b + '' + a));
     return nums.join('');
}
