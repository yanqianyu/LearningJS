/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let values = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let res = "";
    for(let i = 0; i < keys.length; i++) {
        while(num >= keys[i]) {
            num -= keys[i];
            res += values[i];
        }
    }
    return res;
};