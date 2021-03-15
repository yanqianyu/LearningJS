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
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
     // 基于栈做中序遍历
     let stack = [];
     let res = [];
     let cur = root;
     while (cur || stack.length) {
         while(cur) {
             stack.push(cur);
             cur = cur.left;
         }
         cur = stack.pop();
         res.push(cur.val);
         cur = cur.right;
     }
     return res;
};