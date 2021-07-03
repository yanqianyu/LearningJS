/**
 * @param {number} n
 * @return {number}
 */
 var findNthDigit = function(n) {
     let digit = 1;
     let start = 1, count = 9;
     while(n > count) {
         n -= count;
         digit += 1;
         start *= 10;
         count = digit * start * 9;
     }

     let num = start + Math.floor((n - 1) / digit);
     return (num).toString(num).charAt((n - 1) % digit).charCodeAt() - '0'.charCodeAt();
};