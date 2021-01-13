/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let length = edges.length;
    let parent = new Array(length + 1).fill(0).map((value, index) => index);

    for (let i = 0; i < length; i++) {
        if (find(parent, edges[i][0]) !== find(parent, edges[i][1])) {
            union(parent, edges[i][0], edges[i][1]);
        }
        else {
            return edges[i];
        }
    }

    return [0];
};

function union(parent, index1, index2) {
    parent[find(parent, index1)] = find(parent, index2);
}

function find(parent, index) {
    if (parent[index] !== index) {
        parent[index] = find(parent, parent[index]);
    }
    return parent[index];
}