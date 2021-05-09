/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
 var minDays = function(bloomDay, m, k) {
     let n = bloomDay.length;
     if (n < m * k) {
         return -1;
     }
     let left = Math.min(...bloomDay);
     let right = Math.max(...bloomDay);

     while(left < right) {
         let mid = (left + right) >> 1;
         if (check(mid)) {
             right = mid;
         }
         else {
             left = mid + 1;
         }
     }
     return left;

     function check(mid) {
         let t = 0, cnt = 0;
         for(let i = 0; i < n; i++) {
             if (bloomDay[i] <= mid) {
                 cnt += 1;
             }
             else {
                 cnt = 0;
             }
             if (cnt === k) {
                 t += 1;
                 cnt = 0;
             }
             if (t === m) {
                 return true;
             }
         }
         return false;
     }
};