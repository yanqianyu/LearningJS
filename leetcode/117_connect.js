function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : val;
    this.right = right === undefined ? null : val;
    this.next = next === undefined ? null : next;
}

var connect = function(root) {
    if(!root) {
        return root;
    }
    let nodes = [];
    nodes.push(root);
    while(nodes.length) {
        let len = nodes.length;
        // 上一个节点
        let pre = null;
        for(let i = 0; i < len; i++) {
            let tmp = nodes.shift();
            if(pre) {
                pre.next = tmp;
            }
            pre = tmp;
            if(tmp.left) {
                nodes.push(tmp.left);
            }
            if(tmp.right) {
                nodes.push(tmp.right);
            } 
        }
    }
    return root;
};