/**
 * @param {string} s
 * @return {number}
 */
 var minAddToMakeValid = function(s) {
     let res = 0, record = 0;
     for(let i = 0; i < s.length; i++) {
         if (s[i] === '(') {
             record += 1;
         }
         else {
             if (record !== 0) {
                 record -= 1;
             }
             else {
                 res += 1;
             }
         }
     }
     return res + record;
};