/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
     let z = x ^ y;
     let sum = 0;
     while(z) {
         sum += z & 1;
         z = z >> 1;
     }
     return sum;
};