/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let len = s.length;
    let temp = new Array(len);
    for(let i = 0; i < len; i++) {
        temp[i] = Math.abs(s[i].charCodeAt() - t[i].charCodeAt());
    }

    let left = 0, right = 0;
    let res = 0, sum = 0;
    for(; right < len; right++) {
        sum += temp[right];
        while(sum > maxCost) {
            sum -= temp[left];
            left++;
        }
        res = Math.max(res, right - left + 1);
    }
    return res;
};