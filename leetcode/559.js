/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    let max = 0;
    for(let node of root.children) {
        max = Math.max(max, maxDepth(node));
    }
    return max + 1;
};