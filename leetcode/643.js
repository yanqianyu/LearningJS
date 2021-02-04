/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let res = Number.MIN_VALUE;
    let sum = 0;
    for(let i = 0; i < k; i++) {
        sum += nums[i];
    }
    res = sum / k;
    for(let i = 1; i < nums.length - k + 1; i++) {
        sum -= nums[i-1];
        sum += nums[i + k - 1];
        if (sum / k > res) {
            res = sum / k;
        }
    }
    return res;
};

let nums = [1, 12, -5, -6, 50, 3];
findMaxAverage(nums, 4);