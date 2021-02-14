/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let arr = [];
    for(let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            arr.push(i);
        }
    }
    return arr;
};

var findDisappearedNumbers2 = function(nums) {
    let n = nums.length;
    for(let num of nums) {
        let ori = (num - 1) % n;
        nums[x] += n;
    }
    let res = [];
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] <= n) {
            res.push(i + 1);
        }
    }
    return res;
}