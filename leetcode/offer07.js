/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    if (!preorder.length) return null

    const tree = new TreeNode(preorder[0]) //创建树

    let inorderRootIndex = inorder.indexOf(tree.val)

    //递归构建左子树
    let preorderLeft = preorder.slice(1, inorderRootIndex + 1)  //前序左子树，之所以1开始时为了去掉已经访问过的根节点
    let inorderLeft = inorder.slice(0, inorderRootIndex)  //中序左子树
    tree.left = buildTree(preorderLeft, inorderLeft)

    //递归构建右子树
    let preorderRight = preorder.slice(inorderRootIndex + 1) //前序左子树
    let inorderRight = inorder.slice(inorderRootIndex + 1)  //中序左子树
    tree.right = buildTree(preorderRight, inorderRight)

    return tree
};