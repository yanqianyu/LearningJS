/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

class UnionFind {
    constructor(n) {
        this.parent = new Array(n).fill(0).map((ele, index) => index);
        this.size = new Array(n).fill(1);
        this.setCount = n; // 连通分量个数
    }

    find(index) {
        if (this.parent[index] !== index) {
            this.parent[index] = this.find(this.parent[index]);
        }
        return this.parent[index];
    }

    union(index1, index2) {
        let x = this.find(index1);
        let y = this.find(index2);
        if (x === y) {
            // 同在一个连通分量
            return false;
        }
        if (this.size[x] < this.size[y]){
            [x, y] = [y, x];
        }
        this.parent[y] = x;
        this.size[x] += this.size[y];
        this.setCount -= 1;
        return true;
    }

    connnected(a, b) {
        let x = this.find(a);
        let y = this.find(b);
        return x === y;
    }
}


var maxNumEdgesToRemove = function(n, edges) {
    const ufa = new UnionFind(n), ufb = new UnionFind(n);
    let ans = 0;

    // 节点编号改为从 0 开始
    for (const edge of edges) {
        edge[1] -= 1;
        edge[2] -= 1;
    }
    // 公共边
    for (const [t, u, v] of edges) {
        if (t === 3) {
            if (!ufa.union(u, v)) {
                // u、v在同一个连通分量
                // 此边可以删除
                ans += 1;
            } else {
                ufb.union(u, v);
            }
        }
    }
    // 独占边
    for (const [t, u, v] of edges) {
        if (t === 1) {
            // Alice 独占边
            if (!ufa.union(u, v)) {
                ans += 1;
            }
        } else if (t === 2) {
            // Bob 独占边
            if (!ufb.union(u, v)) {
                ans += 1;
            }
        }
    }
    if (ufa.setCount !== 1 || ufb.setCount !== 1) {
        return -1;
    }
    return ans;
};