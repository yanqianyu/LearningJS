/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaximumXOR = function(nums) {
     class Node {
         constructor() {
             this.left = null;
             this.right = null;
         }
     }

     class Tree {
         constructor() {
             this.root = new Node();
         }
         add(num) {
             let node = this.root;
             for(let i = 31; i >= 0; i--) {
                 if (num & (1 << i)) {
                    if (!node.right) node.right = new Node();
                    node = node.right;
                 }
                 else {
                    if (!node.left) node.left = new Node();
                    node = node.left;
                }
             }
         }
         check(num) {
            let res = 0;
            let node = this.root;
            for (let i = 31; i >= 0; i--) {
                if (num&(1<<i)) {
                    if (node.left) {
                        res += (1<<i);
                        node = node.left;
                    } else node = node.right;
                } else {
                    if (node.right) {
                        res += (1<<i);
                        node = node.right;
                    } else node = node.left;
                }
            }
            return res;
         }
     }

    let res = 0;
    const tree = new Tree();
    tree.add(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        res = Math.max(res, tree.check(nums[i]));
        tree.add(nums[i]);
    }
    return res;
};