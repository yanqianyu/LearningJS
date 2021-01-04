/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let record = new Array(n + 1);
    record[0] = 0;
    record[1] = 1;
    for (let i = 2; i <= n; i++) {
        record[i] = record[i - 1] + record[i - 2];
    }
    return record[n];
};