/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let left = new Array(), right = new Array();
    let res = new Array();

    if (!root) {
        return res;
    }
    left.push(root); 
    res.push([root.val]);
    while(!(left.length === 0 && right.length === 0)) {
        if (left.length === 0) {
            let temp = [];
            while(right.length !== 0) {
                let node = right.pop();
                if (node.left) {
                    left.push(node.left);
                    temp.push(node.left.val);
                }
                if (node.right) {
                    left.push(node.right);
                    temp.push(node.right.val);
                }
            }
            if (temp.length > 0) 
                res.push(temp);
        }
        else if (right.length === 0) {
            let temp = [];
            while(left.length !== 0) {
                let node = left.pop();
                if (node.right) {
                    right.push(node.right);
                    temp.push(node.right.val);
                }
                if (node.left) {
                    right.push(node.left);
                    temp.push(node.left.val);
                }
            }
            if (temp.length > 0)
                res.push(temp);
        }
    }
    return res;
};