/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
     if ( n === 0) {
         return 1;
     }

     if (n === -1) {
         return 1 / x;
     }

     if (n & 1) {
         return myPow(x * x, n >> 1) * x;
     }
     else {
         return myPow(x * x, n >> 1);
     }
};