/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
 var numBusesToDestination = function(routes, source, target) {
     if (source === target) {
         return 0;
     }
     const n = routes.length;
     const edge = new Array(n).fill(0).map(() => new Array(n).fill(0));
     const rec = new Map();
     for(let i = 0; i < n; i++) {
         for(const site of routes[i]) {
             const list = (rec.get(site) || []);
             for(const j of list) {
                 edge[i][j] = edge[j][i] = true;
             }
             list.push(i);
             rec.set(site, list);
         }
     }

     const dis = new Array(n).fill(-1);
     const que = [];
     for (const site of (rec.get(source) || [])) {
        dis[site] = 1;
        que.push(site);
    }
    while (que.length) {
        const x = que.shift();
        for (let y = 0; y < n; y++) {
            if (edge[x][y] && dis[y] === -1) {
                dis[y] = dis[x] + 1;
                que.push(y);
            }
        }
    }

    let ret = Number.MAX_VALUE;
    for (const site of (rec.get(target) || [])) {
        if (dis[site] !== -1) {
            ret = Math.min(ret, dis[site]);
        }
    }
    return ret === Number.MAX_VALUE ? -1 : ret;
};