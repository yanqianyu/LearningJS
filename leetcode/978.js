/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    let tmp = 1, ans = 1;
    let pre = '=';
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i-1]) {
            pre = '=';
            tmp = 1;
        }
        else if (arr[i] > arr[i-1] && pre === '<') {
            tmp += 1;
            pre = '>';
        }
        else if (arr[i] < arr[i - 1] && pre === '>') {
            tmp += 1;
            pre = '<';
        }
        else {
            tmp = 2;
            pre = arr[i] > arr[i-1] ? '>': '<';
        }
        ans = Math.max(pre, ans);
    }
    return ans;
};