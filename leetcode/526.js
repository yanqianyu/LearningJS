/**
 * @param {number} n
 * @return {number}
 */
 var countArrangement = function(n) {
     let ans = 0;
     var dfs = (bits, cur) => {
         if (cur === n + 1) {
             return ans++;
         }
         for(let i = 1; i <= n; i++) {
             if (bits & (1 << i)) {
                 continue;
            }
             if ((cur % i) !== 0 && (i % cur) !== 0) {
                 continue;
             }
             dfs(bits | (1 << i), cur + 1);
         }
     }
     dfs(0, 1);
     return ans;
};