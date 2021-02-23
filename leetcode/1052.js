/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    let sum = 0;
    for(let i = 0; i < grumpy.length; i++) {
        if (grumpy[i] === 0) {
            sum += customers[i];
            customers[i] = 0;
        }
    }

    let num = customers[0];
    let maxVal = customers[0];
    for(let i = 1; i < customers.length; i++) {
        if (i < X) {
            num += customers[i];
        }
        else {
            num = num + customers[i] - customers[i-X];
        }
        maxVal = Math.max(maxVal, num);
    }
    return (sum + maxVal);
};