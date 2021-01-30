/**
 * @param {number[][]} grid
 * @return {number}
 */
class UnionFind {
    constructor(n) {
        this.parent = new Array(n).fill(0).map((ele, index) => index);
        this.rank = new Array(n).fill(1);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX === rootY) {
            return;
        }
        if (this.rank[rootX] < this.rank[rootY]) {
            let tmp = rootX;
            rootX = rootY;
            rootY = tmp;
        }
        this.parent[rootY]  = rootX;
        this.rank[rootX] += this.rank[rootY];
    }
}
var swimInWater = function(grid) {
    let n = grid.length;
    let total = n * n;
    let un = new UnionFind(total);
    let edges = [];
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            let serial = i * n + j;
            if (i < n - 1) {
                edges.push([serial, (i + 1) * n + j, Math.max(grid[i][j], grid[i + 1][j])]);
            }
            if (j < n - 1) {
                edges.push([serial, i * n + j + 1, Math.max(grid[i][j], grid[i][j + 1])]);
            }
        }
    }

    edges.sort((a, b) => {
        return a[2] - b[2];
    });

    let ans = 0;
    for(let i = 0; i < edges.length; i++) {
        let edge = edges[i];
        let x = edge[0];
        let y = edge[1];
        let rank = edge[2];
        un.union(x, y);
        if(un.find(0) === un.find(total - 1)){
            ans = rank;
            break;
        }
    }
    return ans;
};

let arr = [[0,2],[1,3]];
swimInWater(arr);