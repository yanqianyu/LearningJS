/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    let ret = 0;
    const n = s.length;
    for(let t = 1; t <= 26; t++) {
        let l = 0, r = 0;
        const cnt = new Array(26).fill(0);
        // tot 字符种类数，less 少于k的字符种类
        let tot = 0, less = 0;
        while(r < n) {
            cnt[s[r].charCodeAt() - 'a'.charCodeAt()] += 1;
            if (cnt[s[r].charCodeAt() - 'a'.charCodeAt()] === 1) {
                tot++;
                less++;
            }
            if (cnt[s[r].charCodeAt() - 'a'.charCodeAt()] === k) {
                less--;
            }

            while(tot > t) {
                cnt[s[l].charCodeAt() - 'a'.charCodeAt()] -= 1;
                if (cnt[s[l].charCodeAt() - 'a'.charCodeAt()] === k - 1) {
                    less++;
                }
                if (cnt[s[l].charCodeAt() - 'a'.charCodeAt()] === 0) {
                    tot--;
                    less--;
                }
                l += 1;
            }
            if (less === 0) {
                ret = Math.max(ret, r - l + 1);
            }
            r++;
        }
    }
    return ret;
};