/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var advantageCount = function(nums1, nums2) {
    let len = nums1.length;
    let ans = new Array(len).fill(0);
    nums1.sort((x, y) => x - y);
    let indexB = new Array(len).fill(0).map((v, i) => i);
    indexB.sort((x, y) => {
      if (nums2[x] > nums2[y]) return 1;
      return -1;
    })
    let i = 0; 
    let j = 0;
    let k = len - 1;
    while (i < len) {
      if (nums1[i] > nums2[indexB[j]]) {
        ans[indexB[j]] = nums1[i];
        j++;
      } else {
        ans[indexB[k]] = nums1[i];
        k--;
      }
      i++;
    }
    return ans;
};