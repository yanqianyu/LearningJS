/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let record = new Map();
    let record2 = new Map();
    let strArray = s.split(' ');
    if (pattern.length !== strArray.length) {
        return false;
    }
    for(let i = 0; i < pattern.length; i++) {
        let key = pattern[i];
        if (record.has(key) && record.get(key) !== strArray[i]) {
            return false;
        }

        if (record2.has(strArray[i]) && record2.get(strArray[i]) !== key) {
            return false;
        }

        record.set(key, strArray[i]);
        record2.set(strArray[i], key);
    }
    return true;
};