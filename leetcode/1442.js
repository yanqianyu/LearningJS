/**
 * @param {number[]} arr
 * @return {number}
 */
 var countTriplets = function(arr) {
     let len = arr.length;
     let ans = 0;
     for(let i = 0; i < len - 1; i++) {
         let sum = 0;
         for(let k = i; k < len; k++) {
             sum ^= arr[k];
             if (sum === 0 && k > i) {
                 ans += (k - i);
             }
         }
     }
     return ans;
};