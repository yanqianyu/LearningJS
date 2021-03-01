/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let res = new Array();
    for(let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let left = i + 1, right = nums.length - 1;
            while(left < right) {
                if (nums[i] + nums[left] + nums[right] === 0) {
                    if (left === i + 1 || nums[left] !== nums[left - 1]){
                        res.push([nums[i], nums[left], nums[right]]);
                    }
                    left += 1;
                    right -= 1;
                }
                else if (nums[i] + nums[left] + nums[right] > 0) {
                    right--;
                }
                else {
                    left++;
                }
            }
        }
        
    }
    return res;
};