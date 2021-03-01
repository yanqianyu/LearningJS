/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.record = new Array(nums.length).fill(0);
    for(let i = 0; i < nums.length; i++) {
        if (i === 0) {
            this.record[i] = nums[i];
        }
        else {
            this.record[i] = this.record[i-1] + nums[i];
        }
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if (i === 0) {
        return this.record[j];
    }
    else {
        return this.record[j] - this.record[i-1];
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */