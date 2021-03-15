/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
     // 二分查找
     let left = 0, right = x, res = -1;
     while(left <= right) {
         let mid  = Math.floor((right - left) / 2) + left;
         if (mid * mid <= x) {
             res = mid;
             left = mid + 1;
         }
         else {
             right = mid - 1;
         }
     }
     return res;
};