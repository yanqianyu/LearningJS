/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let record = new Array(50000).fill(0);
    let first = new Array(50000).fill(-1);
    let last = new Array(50000).fill(50000);

    let maxVal = 0;
    for(let i = 0; i < nums.length; i++) {
        if (first[nums[i]] === -1) {
            first[nums[i]] = i;
        }
        last[nums[i]] = i;
        record[nums[i]] += 1;
        maxVal = Math.max(maxVal, record[nums[i]]);
    }

    let res = 50000;
    for(let i = 0; i < nums.length; i++) {
        if (record[nums[i]] === maxVal) {
            res = Math.min(res, last[nums[i]] - first[nums[i]] + 1);
        }
    }
    return res;
};