/**
 * @param {string} s
 * @return {boolean}
 */
 var checkRecord = function(s) {
     return s.indexOf("A") === s.lastIndexOf("A") && s.indexOf("LLL") === -1;
};