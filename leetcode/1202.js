/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    function union(x, y) {
        parent[find(x)] = find(y);
    }

    function find(x) {
        return x === parent[x] ? x: (parent[x] = find(parent[x]));
    }

    const parent = [];
    for(let i = 0; i < s.length; i++) {
        parent[i] = i;
    }

    for(let pair of pairs) {
        union(pair[0], pair[1]);
    }

    const idxMap = new Map();
    for(let i = 0; i < s.length; i++){
        const t = idxMap.get(find(i)) || [];
        t.push(i);
        idxMap.set(find(i), t)
    }

    // 局部排序
    const res = [];
    for(const ids of idxMap.values()){
        const t = ids.map(id => s[id])
        t.sort()
        let i = 0
        for(const id of ids){
            res[id] = t[i++]
        }
    }

    return res.join('');
};

