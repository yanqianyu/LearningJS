/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let ans = "";
    let n = s.length;
    let dp = new Array(n);
    for(let i = 0; i < n; i++) {
        dp[i] = new Array(n);
    }

    for(let l = 0; l < n; l++) {
        // l substr长度
        for(let i = 0; i + l < n; i++) {
            let j = i + l;
            if (l == 0) {
                dp[i][j] = true;
            }
            else if (l == 1) {
                dp[i][j] = s[i] === s[j];
            }
            else {
                dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
            }
            if (dp[i][j] && l + 1 > ans.length) {
                ans = s.substring(i, i + l + 1);
            }
        }
    }
    return ans;
};

let s = "babad";
longestPalindrome(s);