/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
     if (needle.length === 0) {
         return 0;
     }
     let left = 0, right = 0, index = 0;
     while(right < haystack.length && index < needle.length) {
         if (haystack.charAt(right) !== needle.charAt(index)) {
             left += 1;
             right = left;
             index = 0;
         }
         else {
             right += 1;
             index += 1;
         }
     }
     return index === needle.length ? left : -1;
};