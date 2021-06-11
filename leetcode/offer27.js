/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var mirrorTree = function(root) {
     if (root === null) {
         return root;
     }
     let tmp = root.left;
     root.left = root.right;
     root.right = tmp;
     mirrorTree(root.left);
     mirrorTree(root.right);
     return root;
};