/**
 * @param {number[][]} dominoes
 * @return {number}
 */

function find(parent, index) {
    if (parent[index] !== index) {
        parent[index] = find(parent, parent[index]);
    }
    return parent[index];
}

function union(parent, index1, index2) {
    let root1 = find(parent, index1);
    let root2 = find(parent, index2);
    
    parent[root2] = root1;
}

var numEquivDominoPairs = function(dominoes) {
    let parent = new Array(dominoes.length).fill(0).map((ele, index) => index);
    for (let i = 0; i < dominoes.length; i++) {
        if (dominoes[i][0] > dominoes[i][1]) {
            let temp = dominoes[i][0];
            dominoes[i][0] = dominoes[i][1];
            dominoes[i][1] = temp;
        }
    }

    dominoes.sort((a, b) => {
        if (a[0] == b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });

    let temp = 1, res = 0;
    for(let i = 1; i < dominoes.length; i++) {
        if (dominoes[i][0] === dominoes[i-1][0] && dominoes[i][1] === dominoes[i-1][1]) {
            temp += 1;
        }
        else {
            res += (temp - 1) * temp / 2;
            temp = 1;
        }
    }
    res += (temp - 1) * temp / 2;
    return res;
};