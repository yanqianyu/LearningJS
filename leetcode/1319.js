/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
function find(parent, index) {
    if (parent[index] !== index) {
        parent[index] = find(parent, parent[index]);
    }
    return parent[index];
}

function union(parent, idx1, idx2, extra) {
    let r1 = find(parent, idx1);
    let r2 = find(parent, idx2);
    if (r1 === r2) {
        extra += 1;
    }
    parent[r2] = r1;
    return extra;
}

var makeConnected = function(n, connections) {
    let extra = 0;

    let parents = new Array(n).fill(0).map((ele, index) => index);
    for(let i = 0; i < connections.length; i++) {
        extra = union(parents, connections[i][0], connections[i][1], extra);
    }

    let count = 0; // 连通分量个数
    for(let i = 0; i < n; i++) {
        if (parents[i] === i) {
            count += 1;
        }
    }

    return extra >= count - 1 ? count - 1 : -1;
};