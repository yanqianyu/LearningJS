/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let start = 0, end = 0, res = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[start]) {
            end = i;
        }
        else {
            if (end - start + 1 >= 3) {
                res.push([start, end]);
            }
            start = end + 1;
            end = start;
        }
    }
    if (end - start + 1 >= 3) {
        res.push([start, end]);
    }
    return res;
};