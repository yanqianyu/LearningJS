/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let arr = new Array(rowIndex + 1).fill(1);
    for(let i = 2; i < arr.length; i++) {
        for(let j = i - 1; j > 0; j--) {
            arr[j] = arr[j] + arr[j - 1];
        }
    }
    return arr;
};

getRow(4);