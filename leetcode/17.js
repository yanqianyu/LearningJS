/**
 * @param {string} digits
 * @return {string[]}
 */

const code = {"2": "abc", "3": "def", "4": "ghi", "5": "jkl", "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"}; 
function help(digits, index, curStr, res) {
    if (index === digits.length) {
        res.push(curStr);
        return;
    }

    for(let i = 0; i < code[digits[index]].length; i++) {
        curStr += code[digits[index]][i];
        help(digits, index + 1, curStr, res);
        curStr = curStr.slice(0, curStr.length - 1);
    }
}
var letterCombinations = function(digits) {
    let res = new Array();
    if (digits.length === 0) {
        return res;
    }
    help(digits, 0, "", res);
    return res;
};