/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
 var largestNumber = function(cost, target) {
    const dp = new Array(target + 1);
    dp[0] = '';
    // 字符串比较
    const strCompare = (str1 = '', str2 = '') => {
        if (str1.length == str2.length) {
            // 长度相同，可以直接比较
            return str1 > str2 ? str1 : str2;
        } else {
            // 取长度长的
            return str1.length > str2.length ? str1 : str2;
        }
    }
    for (let i = 1; i < 10; i++) {
        const val = cost[i - 1];
        for (let j = val; j <= target; j++) {
            // j - val对应下标0处，或已经存在组合，此时才能组合出j
            if (dp[j - val] == '' || dp[j - val]) {
                // i + dp[j - val]拼接新的字符串
                dp[j] = strCompare(dp[j], i + dp[j - val]);
            }
        }
    }
    // 若没有对应的组合返回'0'
    return dp[target] ? dp[target] : '0';
};