/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let res = nums.reduce((pre, cur) => {
        return pre + cur;
    }, 0);

    let tmp = 0;
    for(let i = 0; i < nums.length; i++) {
        if (tmp * 2 + nums[i] === res) {
            return i;
        }
        tmp += nums[i];
    }
    return -1;
};