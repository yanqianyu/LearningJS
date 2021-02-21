/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let res = 0;
    while(left < right) {
        let tmp = (right - left) * Math.min(height[left], height[right]);
        res = Math.max(res, tmp);
        if (height[left] <= height[right]) {
            left += 1;
        }
        else {
            right -= 1;
        }
    }
    return res;
};