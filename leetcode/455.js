/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort(function(a, b) {
        return a - b;
    });
    s.sort(function(a, b) {
        return a - b;
    });
    let childId = 0, cookieId = 0;
    while(childId < g.length && cookieId < s.length) {
        if(g[childId] <= s[cookieId]) {
            childId += 1;
        }
        cookieId += 1;
    }
    return childId;
};