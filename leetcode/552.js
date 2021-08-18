/**
 * @param {number} n
 * @return {number}
 */
 var checkRecord = function(n) {
     if (n === 1) {
         return 3;
     }
     if (n === 2) {
         return 8;
     }
     if (n === 3) {
         return 19;
     }

     let a1 = 2, a2 = 4, a3 = 7;
     let f1 = 3, f2 = 8, f3 = 19;
     let mod = 1000000007;
     for(let i = 3; i < n; i++) {
         let fn = f1 + f2 + f3 + a1 + a2 + a3;
         let an = a1 + a2 + a3;
         a1 = a2 % mod;
         a2 = a3 % mod;
         a3 = an % mod;
         f1 = f2 % mod;
         f2 = f3 % mod;
         f3 = fn % mod;
     }
     return f3 % mod;
};