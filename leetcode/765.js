/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
    let res = 0;
    // 假定左边都是合法的
    for(let i = 0; i < row.length; i += 2) {
        if (row[i] % 2 === 1) {
            if (row[i] !== row[i + 1] + 1) {
                let idx = row.indexOf(row[i] - 1);
                let temp = row[idx];
                row[idx] = row[i + 1];
                row[i + 1] = temp;
                res += 1;
            }
        }
        else {
            if (row[i + 1] !== row[i] + 1) {
                let idx = row.indexOf(row[i] + 1);
                let temp = row[idx];
                row[idx] = row[i + 1];
                row[i + 1] = temp;
                res += 1;
            }
        }
    }
    return res;
};

let arr = [0, 2, 1, 3];
minSwapsCouples(arr);