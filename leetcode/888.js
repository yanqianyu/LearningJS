/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let sumA = A.reduce((pre, cur) => {return pre + cur}, 0);
    let sumB = B.reduce((pre, cur) => {return pre + cur}, 0);
    let res = sumA + sumB;
    let average = res / 2;
    for(let i = 0; i < A.length; i++) {
        let tmpSum = sumA - A[i];
        if (B.includes(average - tmpSum)) {
            return [A[i], average - tmpSum];
        }
    }
    return [0, 0];
};

let A = [1,1];
let B = [2,2];
fairCandySwap(A, B);