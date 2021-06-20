/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
 var treeToDoublyList = function(root) {
     if (!root) {
         return root;
     }
     let head = root;
     while(head.left) {
         head = head.left;
     }

     let inOrder = function(root, last) {
         if (!root) {
             return root;
         }

         let left = inOrder(root.left, root);
         let right = inOrder(root.right, last);
         root.right = right ? right: last;
         return left ? left : root;
     }
     inOrder(root, head);
     let temp = head.right, tempLast = head
     while(true) {
         temp.left = tempLast
         temp = temp.right
         tempLast = tempLast.right
         
         if(tempLast == head)
            break
    }
    return head
};