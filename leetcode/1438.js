/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let left = 0, right = 0;
    let res = 0;
    let maxQueue = [], minQueue = [];

    for(let right = 0; right < nums.length; right++) {
        while(maxQueue.length && maxQueue[maxQueue.length - 1] < nums[right]) {
            maxQueue.pop();
        }
        maxQueue.push(nums[right]);

        while(minQueue.length && minQueue[minQueue.length - 1] > nums[right]) {
            minQueue.pop();
        }
        minQueue.push(nums[right]);
        while(Math.abs(maxQueue[0] - minQueue[0]) > limit) {
            if (nums[left] === maxQueue[0]) {
                maxQueue.shift();
            }
            if (nums[left] === minQueue[0]) {
                minQueue.shift();
            }
            left++;
        }
        res = Math.max(res, right - left + 1);
    }
    return res;
};