/**
 * @param {character[]} chars
 * @return {number}
 */
 var compress = function(chars) {
     let len = 0;
     let cnt = 0;
     for(let i = 0; i < chars.length; i++) {
         cnt += 1;
         if (i + 1 === chars.length || chars[i] !== chars[i + 1]) {
             chars[len] = chars[i];
             len += 1;
             if (cnt > 1) {
                 let cntStr = cnt.toString();
                 for(let j = 0; j < cntStr.length; j++) {
                     chars[len] = cntStr[j];
                     len += 1;
                 }
             }
             cnt = 0;
         }
     }
     return len;
};

let char = ["a","a","b","b","c","c","c"];
console.log(compress(char));