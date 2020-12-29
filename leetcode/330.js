/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    let ach = 0;
    let idx = 0, count = 0, len = nums.length;
    while(ach < n) {
        if (idx >= len || ach + 1 < nums[idx]) {
            count++;
            ach += ach + 1;
        }
        else {
            ach += nums[idx];
            idx++;
        }
    }
    return count;
};