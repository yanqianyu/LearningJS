/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
 var findPaths = function(m, n, maxMove, startRow, startColumn) {
     const memo = new Map(); // 记忆化搜索

     var dfs = (x, y, curMove) => {
         const key = `${x}-${y}-${curMove}`;
         if (memo.has(key)) {
             return memo.get(key);
         }
        
        if (x < 0 || x >= m || y < 0 || y >= n) {
            return 1;
        }
        if (curMove === maxMove) {
            return 0;
        }
        let res = 0;
        res = (res + dfs(x + 1, y, curMove + 1)) % 1000000007;
        res = (res + dfs(x - 1, y, curMove + 1)) % 1000000007;
        res = (res + dfs(x, y + 1, curMove + 1)) % 1000000007;
        res = (res + dfs(x, y - 1, curMove + 1)) % 1000000007;
        memo.set(key, res);
        return res;
     }
     return dfs(startRow, startColumn, 0) % 1000000007;
};
