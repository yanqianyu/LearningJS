/**
 * @param {number} columnNumber
 * @return {string}
 */
 var convertToTitle = function(columnNumber) {
     let res = [];
     while(columnNumber) {
         res.push(String.fromCharCode('A'.charCodeAt() + Math.floor((columnNumber - 1) % 26)));
         columnNumber = Math.floor((columnNumber - 1) / 26)
     }
     return res.reverse().join('');
};