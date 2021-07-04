/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
     let n = nums.length;
     let sum = (1 + n) * n / 2;
     let sum1 = nums.reduce((pre, cur) => cur + pre, 0);
     let set = new Set(nums);
     let sum2 = Array.from(set).reduce((pre, cur) => cur + pre, 0);
     return [sum1 - sum2, sum - sum2];
};