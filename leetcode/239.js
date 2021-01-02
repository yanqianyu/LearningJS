/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let record = new Map();
    let res = [];
    let tempMax = nums[0];
    for(let i = 0; i < k; i++) {
        if (record.has(nums[i])) {
            record.set(nums[i], 1 + record.get(nums[i]));
        }
        else {
            record.set(nums[i], 1);
        }
        if (nums[i] > tempMax) {
            tempMax = nums[i];
        }
    }

    res.push(tempMax);

    for(let i = k; i < nums.length; i++) {
        record.set(nums[i - k], record.get(nums[i - k]) - 1);
        if (record.has(nums[i])) {
            record.set(nums[i], 1 + record.get(nums[i]));
        }
        else {
            record.set(nums[i], 1);
        }

        if (nums[i] > tempMax) {
            tempMax = nums[i];
        } 
        else {
            if (!record.has(tempMax) || record.get(tempMax) === 0) {
                tempMax = nums[i - k + 1];
                for(let j = i - k + 1; j <= i; j++) {
                    if (tempMax < nums[j]) {
                        tempMax = nums[j];
                    }
                }
            }
        }
        res.push(tempMax);
    }
    return res;
};

maxSlidingWindow([1,3,1,2,0,5], 3);