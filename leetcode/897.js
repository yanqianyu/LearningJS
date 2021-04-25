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
 * @return {TreeNode}
 */
let head;
 var increasingBST = function(root) {
     if (root === null) {
         return null;
     }
     root.right = increasingBST(root.right);
     if (root.left !== null) {
         let node = root.left;
         root.left = null;
         head = node;
         while(node.right !== null) {
             node = node.right;
         }
         node.right = root;
         return increasingBST(head);
     }
     else {
         return root;
     }
};