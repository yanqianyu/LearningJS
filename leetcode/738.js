/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    let strN = N.toString().split('').map(v => +v);
    let i = 1;
    while (i < strN.length && strN[i - 1] <= strN[i]) {
        i += 1;
    }
    if (i < strN.length) {
        while(i > 0 && strN[i - 1] > strN[i]) {
            strN[i-1] -= 1;
            i -= 1;
        }
        for(let k = i + 1; k < strN.length; k++) {
            strN[k] = 9;
        }
    }
    return parseInt(strN.join(''));
};