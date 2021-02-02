/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0, right = 0;
    let counts = new Array(26).fill(0);
    let maxn = 0;
    while(right < s.length) {
        counts[s[right].charCodeAt() - 'A'.charCodeAt()] += 1;
        maxn = Math.max(maxn, counts[s[right].charCodeAt() - 'A'.charCodeAt()]);
        if (right - left + 1 - maxn > k) {
            counts[s[left].charCodeAt() - 'A'.charCodeAt()] -= 1;
            left += 1;;
        }
        right += 1;
    }
    return right - left;
};