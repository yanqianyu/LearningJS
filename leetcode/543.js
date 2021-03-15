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
 var diameterOfBinaryTree = function(root) {
     let res = 0;
     function depth(root) {
        if (root == null) {
            return 0;
        }
        let l = depth(root.left);
        let r = depth(root.right);
        res = Math.max(res, 1 + l + r);
        return Math.max(l, r) + 1;
     }
     depth(root);
     return res - 1;
};