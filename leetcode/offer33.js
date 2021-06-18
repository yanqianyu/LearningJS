/**
 * @param {number[]} postorder
 * @return {boolean}
 */
 var verifyPostorder = function(postorder) {
     var recur = function(i, j) {
         if (i >= j) {
             return true;
         }
         let p = i;
         while(postorder[p] < postorder[j]) {
             p += 1;
         }
         let m = p;
         while(postorder[p] > postorder[j]) {
             p += 1;
         }
         return p === j && recur(i, m - 1) && recur(m, j - 1);
     }
     return recur(0, postorder.length - 1);
};