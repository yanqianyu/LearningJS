/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
 var findLongestWord = function(s, dictionary) {
     let i, j, res = '';
     for(let w of dictionary) {
         i = 0;
         j = 0;
         while(i < s.length && j < w.length) {
             if (s[i] === w[j]) {
                 j += 1;
             }
             i += 1;
         }
         if (j === w.length) {
             if (w.length > res.length) {
                 res = w;
             }
             else if (w.length === res.length) {
                 res = w > res ? res : w;
             }
         }
     }
     return res;
};