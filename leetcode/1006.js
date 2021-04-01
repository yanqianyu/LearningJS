/**
 * @param {number} N
 * @return {number}
 */
 var clumsy = function(N) {
     if (N <= 2) {
         return N;
     }
     if (N == 3) {
         return 6;
     }
     let sum = Math.floor(N * (N - 1) / (N - 2)) + N - 3;
     N -= 4;

     while (N >= 4) {
         let temp = Math.floor(N * (N - 1) / (N - 2)) + N - 3;
         sum -= temp;
         N -= 4;
    }
    return sum - clumsy(N);
};