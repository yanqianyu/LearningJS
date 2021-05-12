/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
 var xorQueries = function(arr, queries) {
     let n = arr.length;
     let map = new Array(n);
     let xor = 0;
     for(let i = 0; i < n; i++) {
         xor ^= arr[i];
         map[i] = xor;
     }

     let res = [];
     for(let i = 0; i < queries.length; i++) {
         if (queries[i][0] === 0) {
             res.push(map[queries[i][1]]);
         }
         else {
             res.push(map[queries[i][1]] ^ map[queries[i][0] - 1])
         }
     }
     return res;
};