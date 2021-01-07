/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const parent = new Array(n).fill(0);
    for(let i = 0; i < n; i++) {
        parent[i] = i;
    }

    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            if (isConnected[i][j] === 1) {
                union(parent, i , j);
            }
        }
    }

    let circles = 0;
    for(let i = 0; i < n; i++) {
        if (parent[i] === i) {
            circles += 1;
        }
    }
    return circles;
};

function union(parent, i, j) {
    parent[find(parent, i)] = find(parent, j);
}

function find(parent, index) {
    if (parent[index] !== index) {
        parent[index] = find(parent, parent[index]);
    }
    return parent[index];
}