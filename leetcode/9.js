/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let reverse = 0, temp = x;
    while(temp !== 0) {
        reverse = reverse * 10 + temp % 10;
        temp = Math.floor(temp / 10);
    }
    return x === reverse;
};