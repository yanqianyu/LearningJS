/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 0) {
        return [];
    }
    let left = nums[0], right = nums[0];
    let res = new Array();
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1] + 1) {
            right = nums[i];
        }
        else {
            if (right === left) {
                res.push(left.toString());
            }
            else {
                res.push(left.toString() + "->" + right.toString());
            }
            left = right = nums[i];
        }
    }

    // 对于最后一个元素
    if (right === left) {
        res.push(left.toString());
    }
    else {
        res.push(left.toString() + "->" + right.toString());
    }
    return res;
};

let a = [0, 1, 2, 4, 5, 7];
summaryRanges(a);