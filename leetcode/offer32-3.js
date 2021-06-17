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
    if(!root){
        return []
    }
    let queue=[]
    let level=[]  
    let count=0
    queue.push(root)
    while(queue.length){
        let size = queue.length
        let curLevel =[]
        count++
        for(let i=0;i<size;i++){
            let cur = queue.shift()  
            if(count%2===0){
                curLevel.unshift(cur.val)
            } else {
              curLevel.push(cur.val)
            }
            if(cur.left){
                queue.push(cur.left)
            }
            if(cur.right){
                queue.push(cur.right)
            }
        }
        level.push(curLevel)
    }
    return level
};