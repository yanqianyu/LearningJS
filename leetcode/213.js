/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length <= 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    else if (nums.length == 2) {
        return Math.max(nums[0], nums[1]);
    }

    return Math.max(dpRob(nums, 0, nums.length - 2), dpRob(nums, 1, nums.length - 1));

    function dpRob(nums, start, end) {
        let first = nums[start], second = Math.max(nums[start], nums[start + 1]);
        for (let i = start + 2; i <= end; i++) {
            const temp = second;
            second = Math.max(first + nums[i], second);
            first = temp;
        }
        return second;
    }
};