/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let tmp = 0, res = 0;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            tmp += 1;
        }
        else {
            res = Math.max(res, tmp);
            tmp = 0;
        }
    }
    res = Math.max(res, tmp);
    return res;
};