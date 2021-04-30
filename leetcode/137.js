/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    for(let i = 0; i < nums.length; ++i){
        if(nums.indexOf(nums[i], i + 1) == -1 && nums.indexOf(nums[i]) == i){
            return nums[i];
        }
    }
};