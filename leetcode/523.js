/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var checkSubarraySum = function(nums, k) {
     let sum = 0;
     let set = new Set();
     let n = nums.length;
     for(let i = 0; i < n; i++) {
         sum += nums[i];
         if (i > 0) {
             let rem = sum % k;
             if (rem === 0 || set.has(rem)) {
                 return true;
             }
             set.add((sum - nums[i]) % k); 
         }
     }
     return false;
};