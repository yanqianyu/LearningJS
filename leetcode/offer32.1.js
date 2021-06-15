/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var levelOrder = function(root) {
     let queue = [];
     let res = [];
     if (root === null) {
         return res;
     }

     queue.push(root);
     while(queue.length) {
         let tmp = queue.shift();
         res.push(tmp.val);
         if (tmp.left) {
             queue.push(tmp.left);
         }
         if (tmp.right) {
             queue.push(tmp.right);
         }
     }
     return res;
};