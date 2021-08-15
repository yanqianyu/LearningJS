/**
 * @param {number[]} a
 * @return {number[]}
 */
 var constructArr = function(a) {
     let res = new Array(a.length);
     for(let i = 0, cur = 1; i < a.length; i++) {
         res[i] = cur;
         cur *= a[i];
     }

     for(let i = a.length - 1, cur = 1; i >= 0; i--) {
         res[i] *= cur;
         cur *= a[i];
     }
     return res;
};