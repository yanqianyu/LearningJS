/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const m = nums1.length, n = nums2.length;
    let left = Math.floor((m + n + 1) / 2);
    let right = Math.floor((m + n + 2) / 2);
    return (findKth(nums1, 0, nums2, 0, left) + findKth(nums1, 0, nums2, 0, right)) / 2.0;
};

function findKth(nums1, i, nums2, j, k) {
    if (i >= nums1.length) {
        return nums2[j + k - 1];
    }
    if (j >= nums2.length) {
        return nums1[i + k - 1];
    }

    if (k == 1) {
        return Math.min(nums1[i], nums2[j]);
    }

    let khalf = Math.floor(k / 2);
    let midVal1 = (i + khalf - 1 < nums1.length) ? nums1[i + khalf - 1]: Number.MAX_VALUE;
    let midVal2 = (j + khalf - 1 < nums2.length) ? nums2[j + khalf - 1]: Number.MAX_VALUE;

    if (midVal1 < midVal2) {
        return findKth(nums1, i + khalf, nums2, j, k - khalf);
    }
    else {
        return findKth(nums1, i, nums2, j + khalf, k - khalf);
    }
}

let arr1 = [1, 3];
let arr2 = [2];
findMedianSortedArrays(arr1, arr2);