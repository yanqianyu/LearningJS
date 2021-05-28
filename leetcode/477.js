/**
 * @param {number[]} nums
 * @return {number}
 */
 var totalHammingDistance = function(nums) {
     let res = 0;
     for(let i = 0; i < 32; i++) {
         let cnt0 = 0, cnt1 = 0;
         for(const num of nums) {
             (num & (1 << i)) === 0 ? cnt0++ : cnt1++;
         }
         res += cnt0 * cnt1;
     }
     return res;
};