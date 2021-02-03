/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function getMid(window) {
    let len = window.length;
    let half = Math.floor(len / 2);
    if (len % 2 === 0) {
        return (window[half] + window[half - 1]) / 2;
    }
    else {
        return window[half];
    }
}
var medianSlidingWindow = function(nums, k) {
    let res = new Array(nums.length - k + 1);
    let window = new Array(k);
    for(let i = 0; i < k; i++) {
        window[i] = nums[i];
    }
    window.sort((a, b) => {
        return a - b
    });
    res[0] = getMid(window);

    for(let i = 0; i < nums.length - k; i++) {
        let idx = window.findIndex(e => e === nums[i]);
        window[idx] = nums[i + k];
        while(idx < window.length - 1 && window[idx] > window[idx + 1]) {
            let tmp = window[idx];
            window[idx] = window[idx + 1];
            window[idx + 1] = tmp;
            idx++;
        }

        while(idx > 0 && window[idx] < window[idx - 1]) {
            let tmp = window[idx];
            window[idx] = window[idx - 1];
            window[idx - 1] = tmp;
            idx--;
        }

        res[i + 1] = getMid(window);
    }
    return res;
};

let arr = [1, 3, -1, -3, 5, 3, 6, 7];
medianSlidingWindow(arr, 3);