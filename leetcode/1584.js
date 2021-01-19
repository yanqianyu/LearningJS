/**
 * @param {number[][]} points
 * @return {number}
 */

function find(parent, index) {
    if (parent[index] === index) {
        return index;
    }
    parent[index] = find(parent, parent[index]);
    return parent[index];
}

function union(parent, rank, index1, index2) {
    let px = find(parent, index1);
    let py = find(parent, index2);

    if (px === py) {
        return false;
    }
    if (rank[px] < rank[py]) {
        [px, py] = [py, px];
    }
    rank[px] += rank[py];
    parent[py] = px;
    return true;
}

var minCostConnectPoints = function(points) {
    const dist = (x, y) => {
        return Math.abs(points[x][0] - points[y][0]) + Math.abs(points[x][1] - points[y][1]);
    }

    const n = points.length;
    const parent = new Array(n).fill(0).map((ele, index) => index);
    const rank = new Array(n).fill(1);
    const edges = [];
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            edges.push([dist(i, j), i, j]);
        }
    }

    edges.sort((a, b) => a[0] - b[0]);

    let ret = 0, num = 1;
    for (const [length, x, y] of edges) {
        if (union(parent, rank, x, y)) {
            ret += length;
            num += 1;
            if (num === n) {
                break;
            }
        }
    }
    return ret;
};