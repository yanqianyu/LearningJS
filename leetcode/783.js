/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minDiffInBST = function(root) {
     let ans = [];
     let dfs = function(root) {
         if (root.left) {
             dfs(root.left);
         }
         ans.push(root.val);
         if (root.right) {
             dfs(root.right);
         }
     }
     dfs(root);
     let res = Number.MAX_VALUE;
     for(let i = 0; i < ans.length; i++) {
         if((ans[i] - ans[i - 1]) < res) {
             res = ans[i] - ans[i - 1];
         }
     }
     return res;
};