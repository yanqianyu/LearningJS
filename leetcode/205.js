/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let table_s2t = {};
    let table_t2s = {};
    for (let i = 0; i < s.length; i++) {
        const x = s[i], y = t[i];
        if ((table_s2t[x] && table_s2t[x] !== y) || (table_t2s[y] && table_t2s[y] !== x)) {
            return false;
        }
        table_s2t[x] = y;
        table_t2s[y] = x;
    }
    return true;
};