/**
 * @param {number[]} encoded
 * @return {number[]}
 */
 var decode = function(encoded) {
     let all = 0, n = encoded.length;
     for(let i = 1; i <= n + 1; i++) {
         all ^= i;
     }

     for(let i = n - 1; i >= 0; i-=2) {
         all ^= encoded[i];
     }

     let res = new Array(n + 1);
     res[0] = all;
     for(let i = 0; i < n; i++) {
         res[i + 1] = res[i] ^ encoded[i];
     }
     return res;
};