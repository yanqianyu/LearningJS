/**
 * @param {number} n
 * @return {number}
 */
 var lastRemaining = function(n) {
     return n === 1 ? 1 : 2 * (Math.floor(n / 2) + 1  - lastRemaining(Math.floor(n / 2) ));
};