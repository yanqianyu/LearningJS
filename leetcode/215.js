/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 数组中第k大的元素 快排
function quick(arr, left, right, k) {
    if (left < right) {
        let index = partition(arr, left, right);
        if (k === index) {
            return arr[k];
        }
        else if (k < index) {
            return quick(arr, left, index - 1, k);
        }
        else {
            return quick(arr, index + 1, right, k);
        }
    }
    return arr[left];
}
function partition(arr, left, right) {
    let pivot = arr[(left + right) >> 1];
    let i = left, j = right
    while(i < j) {
        while(arr[i] < pivot) {
            i += 1;
        }
        while(arr[j] > pivot) {
            j -= 1;
        }
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        if (arr[i] === arr[j] && i !== j) {
            i += 1;
        }
    }
    return i;
}
 var findKthLargest = function(nums, k) {
     return quick(nums, 0, nums.length - 1, nums.length - k);
};