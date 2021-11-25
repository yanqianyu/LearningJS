/**
 * @param {number} n
 * @return {number}
 */
 var integerReplacement = function(n) {
     let cnt = 0;
     while(n !== 1) {
         if (n % 2 === 0) {
             cnt += 1;
             n = Math.floor(n / 2);
         }
         else if (n % 4 === 1) {
             cnt += 2;
             n = Math.floor(n / 2);
         }
         else {
             if (n === 3) {
                 cnt += 2;
                 n = 1;
             }
             else {
                 cnt += 2;
                 n = Math.floor(n / 2) + 1;
             }
         }
     }
     return cnt;
};