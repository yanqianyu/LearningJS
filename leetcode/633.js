/**
 * @param {number} c
 * @return {boolean}
 */
 var judgeSquareSum = function(c) {
     for(let i = 0; i * i <= c; i++) {
         let j = Math.sqrt(c - i * i);
         if (Math.floor(j) === Math.ceil(j)) {
             return true;
         }
     }
     return false;
};