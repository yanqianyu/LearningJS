/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let parentMap = new Map();
    let valueMap = new Map();

    for(let i = 0; i < equations.length; i++) {
        if (!parentMap.has(equations[i][0])) {
            parentMap.set(equations[i][0], equations[i][0]);
        }
        if (!parentMap.has(equations[i][1])) {
            parentMap.set(equations[i][1], equations[i][1]);
        }

        if (!valueMap.has(equations[i][0])) {
            valueMap.set(equations[i][0], 1);
        }
        if (!valueMap.has(equations[i][1])) {
            valueMap.set(equations[i][1], 1);
        }

        union(parentMap, valueMap, equations[i][0], equations[i][1], values[i]);
    }

    let res = [];
    for(let i = 0; i < queries.length; i++) {
        let tmp1 = find(parentMap, valueMap, queries[i][0]);
        let tmp2 = find(parentMap, valueMap, queries[i][1]);

        if (!tmp1 || !tmp2) {
            res.push(-1.0);
            continue;
        }

        if (tmp1.index === tmp2.index) {
            res.push(tmp1.value / tmp2.value);
        }
        else {
            res.push(-1.0);
        }
    }
    return res;
};

function union(parentMap, valueMap, index1, index2, value) {
    let tmp1 = find(parentMap, valueMap, index1);
    let tmp2 = find(parentMap, valueMap, index2);
    parentMap.set(tmp1.index, tmp2.index);
    valueMap.set(tmp1.index, (value * tmp2.value) / tmp1.value);
}

function find(parentMap, valueMap, index) {
    let value = 1;
    while (parentMap.get(index) && parentMap.get(index) !== index) {
        value *= valueMap.get(index);
        index = parentMap.get(index);
    }
    if (!parentMap.get(index)) {
        return null;
    }
    return {
        index,
        value
    };
}