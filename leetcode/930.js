/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
 var numSubarraysWithSum = function(nums, goal) {
    const map = new Map([[0,1]]);
    let sum = 0,res = 0;
    for(const num of nums){
        sum += num;
        if(map.has(sum-goal)){
            res += map.get(sum-goal);
        }
        map.set(sum,(map.get(sum) || 0) + 1);
    }
    return res;
};