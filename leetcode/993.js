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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
 var isCousins = function(root, x, y) {
    let height_x = 0, height_y = 0;
    let par_x = root, par_y = root;
    
    var dfs = (node, dep, x, y, par) => {
        if (node === null) {
            return;
        }
        if (node.val === x) {
            par_x = par;
            height_x = dep;
        }
        else if (node.val === y) {
            par_y = par;
            height_y = dep;
        }
        else {
            dfs(node.left, dep + 1, x, y, node.val);
            dfs(node.right, dep + 1, x, y, node.val);
        }
    }

    dfs(root.left, 1, x, y, root.val);
    dfs(root.right, 1, x, y, root.val);
    return (par_x !== par_y) && (height_x === height_y);
};
