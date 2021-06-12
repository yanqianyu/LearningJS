/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
     if (root === null) {
         return true;
     }
     return help(root.left, root.right);
};

function help(rootA, rootB) {
    if (rootA === null && rootB === null) {
        return true;
    }
    if (rootA === null || rootB === null) {
        return false;
    }

    return rootA.val === rootB.val && help(rootA.left, rootB.right) && help(rootA.right, rootB.left);
}