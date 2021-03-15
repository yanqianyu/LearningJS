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
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function(root, key) {
    if (root == null) {
        return root;
    }
    if (root.val === key) {
        if (root.left == null) {
            // 没有左子树
            return root.right;
        }
        if (root.right == null) {
            // 没有右子树
            return root.left;
        }
        let minNode = getMin(root.right);
        root.val = minNode.val;
        root.right = deleteNode(root.right, minNode.val);
    }
    else if (root.val > key) {
        root.left = deleteNode(root.left, key);
    }
    else {
        root.right = deleteNode(root.right, key);
    }
    return root;
};


function getMin(root) {
    while(root.left) {
        root = root.left;
    }
    return root;
}