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
 var maxPathSum = function(root) {
     let res = -Infinity;
    function maxGain(root) {
        if (root == null) {
            return 0;
        }
        let leftGain = Math.max(maxGain(root.left), 0);
        let rightGain = Math.max(maxGain(root.right), 0);
        let price = leftGain + rightGain + root.val;
        res = Math.max(price, res);
        return root.val + Math.max(leftGain, rightGain);
    }
    maxGain(root);
    return res;
};