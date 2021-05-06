/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
 var decode = function(encoded, first) {
     let n = encoded.length;
     let ans = new Array(n + 1);
     ans[0] = first;
     for(let i = 1; i <= n; i++) {
         ans[i] = encoded[i - 1] ^ ans[i - 1];
     }
     return ans;
};