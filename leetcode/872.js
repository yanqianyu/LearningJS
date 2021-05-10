/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var leafSimilar = function(root1, root2) {
    let str1 = help(root1, "");
    let str2 = help(root2, "");
    return str1 === str2;
};

function help(root, str) {
    if(root === null) {
        return str;
    }
    if (root.left === null && root.right === null) {
        str = str + root.val;
        return str;
    }
    return help(root.left, str) + help(root.right, str);
}