/**
 * @param {number} n
 * @return {string[]}
 */

function help(left, right, curStr, res) {
    // left还有多少 right还有多少
    if (left == 0 && right == 0) {
        res.push(curStr)
        return;
    }
    if (left > 0) {
        help(left - 1, right, curStr + "(");
    }
    if (right > left) {
        help(left, right - 1, curStr + ")");
    }
}

var generateParenthesis = function(n) {
    let res = [];
    help(n, n, "", res);
    return res;
};