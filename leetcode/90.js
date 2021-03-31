/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
     nums.sort((a, b) => a - b);
     const res = [];
     const dfs = (len, cur, start) => {
         if (cur.length == len) {
             res.push(cur);
             return;
         }
         for(let i = start; i < nums.length; i++) {
             if (i > start && nums[i] == nums[i - 1]) {
                 continue;
             }
             dfs(len, cur.concat(nums[i]), i + 1);
         }
     }

     for(let len = 0; len <= nums.length; len++){
        dfs(len, [], 0);
    }
 
    return res;
};