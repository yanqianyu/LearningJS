/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let res = 0;
    for(let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i-1]) {
            res += 1;
            nums[i] = nums[i-1];
        }
    }
    if (res <= 1) {
        return true;
    }
    return false;
};

let nums = [3, 4, 2, 3];
checkPossibility(nums);