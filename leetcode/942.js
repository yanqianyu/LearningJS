/**
 * @param {string} s
 * @return {number[]}
 */
 var diStringMatch = function(s) {
     let n = s.length;
     let low = 0, high = n;
     let res = new Array(n + 1);
     for(let i = 0; i < n; i++) {
         res[i] = s[i] === 'I' ? low++ : high--;
     }
     res[n] = low;
     return res;
};