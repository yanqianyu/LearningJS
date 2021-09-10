/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let index = 0;
    let cnt = 0, sum = k;
    for(let i = 0; i < chalk.length; i++) {
        cnt += chalk[i];
    }
    sum %= cnt;
    while(true) {
        sum -= chalk[index];
        if (sum < 0) {
            break;
        }
        index += 1;
        index %= chalk.length;
    }
    return index;
};