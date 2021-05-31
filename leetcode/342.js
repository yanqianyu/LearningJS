/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfFour = function(n) {
     let x = 4;
     while(x > 0 && x < n) {
         x <<= 2;
     }
     return n == 1 || n == x;
};