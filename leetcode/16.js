/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let res = nums[0] + nums[1] + nums[2];
    for(let i = 0; i < nums.length - 2; i++) {
        let left = i + 1, right = nums.length  - 1;
        while(left < right) {
            let cu = nums[i] + nums[left] + nums[right];
            if (Math.abs(cu - target) < Math.abs(res - target)) {
                res = cu;
            }
            if (cu > target) {
                right -= 1;
            }
            else if (cu < target) {
                left += 1;
            }
            else {
                return cu;
            }
        }
    }
    return res;
};