/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const cnt = new Array(26).fill(0);
    for(let ch of s) {
        cnt[ch.charCodeAt() - 'a'.charCodeAt()]++;
    }

    for(let ch of t) {
        cnt[ch.charCodeAt() - 'a'.charCodeAt()]--;
        if (cnt[ch.charCodeAt() - 'a'.charCodeAt()] < 0) {
            return ch;
        }
    }
    return ' ';
};