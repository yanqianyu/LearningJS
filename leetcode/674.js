/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length <= 1) {
        return nums.length;
    }

    let res = 1, tmp = 1;
    for(let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            tmp += 1;
        }
        else {
            if (tmp > res) {
                res = tmp;
            }
            tmp = 1;
        }
    }
    if (tmp > res) {
        res = tmp;
    }
    return res;
};