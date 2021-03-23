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
 * @param {number} target
 * @return {number[][]}
 */
function dfs(curNode, target, res, tmp, curSum) {
    if (curNode === null) {
        return;
    }
    tmp.push(curNode.val);
    curSum += curNode.val;
    if (curSum === target && !curNode.left && !curNode.right) {
        res.push([...tmp]);
    }
    dfs(curNode.left, target, res, tmp, curSum);
    dfs(curNode.right, target, res, tmp,  curSum);

    tmp.pop();
}
 var pathSum = function(root, target) {
     let res = [];
     if (!root) {
         return res;
     }
     dfs(root, target, res, [], 0);
     return res;
};