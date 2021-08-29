/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
     let ans = 0;
     for(let i = 1; i < arr.length; i++) {
         arr[i] += arr[i - 1];
     }
     for(let start = 0; start < arr.length; start ++) {
         for(let i = start; i < arr.length; i++) {
             if ((i - start + 1) & 1) {
                 ans += (arr[i] - (arr[start - 1] || 0))
             }
         }
     }
     return ans;
};