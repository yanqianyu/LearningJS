/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let window = cardPoints.length - k;
    let left = 0, right = window;
    let sum = 0;
    for(let i = left; i < right; i++) {
        sum += cardPoints[i];
    }
    let presum = sum;
    for(let i = 1; i < cardPoints.length - window + 1; i++) {
        let temp = presum - cardPoints[i - 1] + cardPoints[i + window - 1];
        if (temp < sum) {
            sum = temp;
        }
        presum = temp;
    }

    let res = cardPoints.reduce((pre, cur) => pre + cur);
    return res - sum;
};

let arr = [1,2,3,4,5,6,1];
maxScore(arr, 3);