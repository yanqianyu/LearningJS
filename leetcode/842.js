/**
 * @param {string} S
 * @return {number[]}
 */
var dfs = function(S, index, lis) {
    if (index == S.length) {
        return lis.length > 2;
    }

    for(let i = index + 1; i <= S.length; i++) {
        let temp = S.substring(index, i);
        // 以0开头 长度大于10 超出范围2^31 - 1
        if (S[index] == '0' && i > index + 1 || temp.length > 10 || parseInt(temp) > 2147483647) {
            break;
        }
        let str = parseInt(temp);
        let one = lis.length >= 2 ? lis[lis.length - 1] : -1;
        let two = lis.length >= 2 ? lis[lis.length - 2] : -1;
        lis.push(str);

        if ((one == -1 || two == -1 || one + two == str) && dfs(S, i, lis)) {
            return true;
        }
        lis.pop();
    }
    return false;
}
var splitIntoFibonacci = function(S) {
    let res = [];
    dfs(S, 0, res);
    return res;
};