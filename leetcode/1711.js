/**
 * @param {number[]} deliciousness
 * @return {number}
 */
 var countPairs = function(deliciousness) {
     const MOD = 1000000000 + 7;
     let maxVal = 0;
     for(const val of deliciousness) {
         maxVal = Math.max(maxVal, val);
     }

     const maxSum = maxVal * 2;
     let pairs = 0;
     const map = new Map();
     const n = deliciousness.length;
     for(let i = 0; i < n; i++) {
         const val = deliciousness[i];
         for(let sum = 1; sum <= maxSum; sum <<= 1) {
             const count = map.get(sum - val) || 0;
             pairs = (pairs + count) % MOD;
         }
         map.set(val, (map.get(val) || 0) + 1);
     }
     return pairs;
};