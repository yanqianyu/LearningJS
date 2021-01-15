/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    let parent = new Array(20001);
    let result = new Set();

    for(let i = 0; i < stones.length; i++) {
        parent[stones[i][0]] = stones[i][0];
        parent[stones[i][1] + 10000] = stones[i][1] + 10000;
    }

    for(let i = 0; i < stones.length; i++) {
        union(parent, stones[i][0], stones[i][1] + 10000);
    }

    for(let i = 0; i < stones.length; i++) {
        result.add(find(parent, stones[i][0]));
    }
    return stones.length - result.size;
};

function union(parent, index1, index2) {
    if (find(parent, index1) !== find(parent, index2)) {
        parent[find(parent, index2)] = parent[find(parent, index1)];
    }
}

function find(parent, index) {
    while(parent[index] !== index) {
        index = parent[index];
    }
    return index;
}