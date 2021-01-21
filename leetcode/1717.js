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
            // 如果刚刚是优先消除ab，那么现在就是还剩a个字符a，b个字符b
            // 现在就可以消除ba了，消减的次数为min(a, b);
            // 得分min(x, y) * min(a, b)
            let m = Math.min(a, b);
            let n = Math.min(x, y);
            res += n * m;
            a = b = 0;
        }
    }
    return res;
};