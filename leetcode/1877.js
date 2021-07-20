/**
 * @param {number[]} nums
 * @return {number}
 */
 var minPairSum = function(nums) {
    const n = nums.length;
    let res = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < Math.floor(n / 2); i++) {
        res = Math.max(res, nums[i] + nums[n - 1 - i]);
    }
    return res;
};