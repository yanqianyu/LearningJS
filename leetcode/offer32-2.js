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
 var levelOrder = function(root) {
    if (!root) return []

    const queue = [[root, 0]], res = []

    while (queue.length) {
        const [node, level] = queue.shift()

        if (!res[level]) res[level] = []
        res[level].push(node.val)

        node.left && queue.push([node.left, level + 1])
        node.right && queue.push([ node.right, level + 1 ])
    }

    return res
};