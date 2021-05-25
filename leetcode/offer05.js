/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
     let res = '';
     for(let c of s) {
         res += c.charCodeAt() === 32 ? '%20': c;
     }
     return res;
};