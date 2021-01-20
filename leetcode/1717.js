/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    // x -> ab
    // y -> ba;
    s += 'c'; // 哨兵
    let res = 0;
    let a = 0, b = 0; // 连续子串中a的数量和b的数量
    for(let c of s) {
        if (c === 'a' || c === 'b') {
            if (c === 'a') {
                a += 1;
            }
            else {
                b += 1;
            }

            if (x >= y && c === 'b' && a > 0) {
                // 优先ab
                a--;
                b--;
                res += x;
            }
            else if (x <= y && c === 'a' && b > 0) {
                // ba
                a--;
                b--;
                res += y;
            }
        }
        else {
            // 为什么
            let m = Math.min(a, b);
            let n = Math.min(x, y);
            res += n * m;
            a = b = 0;
        }
    }
    return res;
};