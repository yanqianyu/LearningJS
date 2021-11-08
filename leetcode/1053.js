/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var prevPermOpt1 = function(arr) {
     let p = arr.length - 1;
     while(p > 0) {
         if (arr[p] >= arr[p - 1]) {
             p -= 1;
         }
         else {
             break;
         }
     }
     if (p === 0) {
         return arr;
     }
     let left = p - 1, right = p;
     while(true) {
         if (p + 1 < arr.length && arr[p + 1] < arr[left]) {
             p += 1;
             if (arr[p] > arr[right]) {
                 right = p;
             }
         }
         else {
             [arr[right], arr[left]] = [arr[left], arr[right]];
             break;
         }
     }
     return arr;
};