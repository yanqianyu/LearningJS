/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
 var numWays = function(n, relation, k) {
     let record = new Map();
     for(let i = 0; i < relation.length; i++) {
         if (record.has(relation[i][0])) {
            let old = record.get(relation[i][0]);
            old.push(relation[i][1]);
            record.set(relation[i][0], old);
         }
         else {
             record.set(relation[i][0], [relation[i][1]]);
         }
     }

     let res = 0;
     const dfs = (record, cur, k, n) => {
        if (k === 0) {
            if (cur !== n - 1) {
                return;
            }
            else {
                res += 1;
            }
            return;
        }
        if (record.has(cur)) {
            let temp = record.get(cur);
            for(let i = 0; i < temp.length; i++) {
                dfs(record, temp[i], k - 1, n);
            }
        }
    }
    dfs(record, 0, k, n);
    return res;
};

function dfs(record, cur, k, n) {
    if (k === 0) {
        if (cur !== n - 1) {
            return;
        }
        else {
            res += 1;
        }
    }
    let temp = record.get(cur);
    for(let i = 0; i < temp.length; i++) {
        dfs(record, temp[i], k - 1, n);
    }
}

let arr = [[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]];
numWays(5, arr, 3);