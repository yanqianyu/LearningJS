/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
    const n = grid.length;
    const f = new Array(n * n * 4).fill(0)
                                  .map((element, index) => index);
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const idx = i * n + j;
            if (i < n - 1) {
                const bottom = idx + n;
                merge(f, idx * 4 + 2, bottom * 4);
            }
            if (j < n - 1) {
                const right = idx + 1;
                merge(f, idx * 4 + 1, right * 4 + 3);
            }
            if (grid[i][j] === '/') {
                merge(f, idx * 4, idx * 4 + 3);
                merge(f, idx * 4 + 1, idx * 4 + 2);
            } else if (grid[i].charAt(j) == '\\') {
                merge(f, idx * 4, idx * 4 + 1);
                merge(f, idx * 4 + 2, idx * 4 + 3);
            } else {
                merge(f, idx * 4, idx * 4 + 1);
                merge(f, idx * 4 + 1, idx * 4 + 2);
                merge(f, idx * 4 + 2, idx * 4 + 3);
            }
        }
    }

    const fathers = new Set();
    for (let i = 0; i < n * n * 4; i++) {
        const fa = find(f, i);
        fathers.add(fa);
    }
    return [...fathers].length;
};

find = (f, x) => {
    if (f[x] === x) {
        return x;
    }
    const fa = find(f, f[x]);
    f[x] = fa;
    return fa;
}

merge = (f, x, y) => {
    const fx = find(f, x);
    const fy = find(f, y);
    f[fx] = fy;
}
