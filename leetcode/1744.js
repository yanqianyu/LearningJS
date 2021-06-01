/**
 * @param {number[]} candiesCount
 * @param {number[][]} queries
 * @return {boolean[]}
 */
 var canEat = function(candiesCount, queries) {
     let n = candiesCount.length, m = queries.length;
     let sum = new Array(n + 1).fill(0);
     let ans = new Array(m).fill(false);

     for(let i = 1; i <= n; i++) {
         sum[i] = sum[i - 1] + candiesCount[i - 1];
     }

     for(let i = 0; i < m; i++) {
         let type = queries[i][0] + 1;
         let day = queries[i][1] + 1;
         let cap = queries[i][2];

         let low = sum[type];
         let high = sum[type - 1] / cap;
         ans[i] = (day <= low && day > high); 
     }

     return ans;
};