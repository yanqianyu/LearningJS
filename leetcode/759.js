/**
 * @param {number[]} arr
 * @return {number}
 */
 var maxChunksToSorted = function(arr) {
     let res = 0, max = 0;
     for(let i = 0; i < arr.length; i++) {
         max = Math.max(max, arr[i]);
         if (max === i) {
             res += 1;
         }
     }
     return res;
};