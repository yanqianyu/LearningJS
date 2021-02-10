/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let record_s1 = new Array(26).fill(0);
    let record_s2 = new Array(26).fill(0);
    
    let n = s1.length, m = s2.length;
    if (n > m) {
        return false;
    }

    for(let i = 0; i < n; i++) {
        record_s1[s1[i].charCodeAt() - 'a'.charCodeAt()]++;
        record_s2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
    }
    if (record_s1.toString() === record_s2.toString()) {
        return true;
    }

    for(let i = n; i < m; i++) {
        record_s2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
        record_s2[s2[i - n].charCodeAt() - 'a'.charCodeAt()]--;
        if (record_s1.toString() === record_s2.toString()) {
            return true;
        }
    }
    return false;
};