/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
     this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let arr = this.nums.slice(0); // 浅拷贝
    let n = arr.length - 1;
    while(n > 0) {
        let randIndex = randOne(0, n);
        [arr[randIndex], arr[n]] = [arr[n], arr[randIndex]];
        n--;
    }
    return arr;
};

function randOne(n, m) {
    // [n, m]中随机
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */