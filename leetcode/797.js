/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
 var allPathsSourceTarget = function(graph) {
     let res = [];
     let  dfs = (graph, path, src, trg) => {
        if (src === trg) {
            res.push(path);
        }
        for(let i = 0; i < graph[src].length; i++) {
            let tmp = Array.from(path);
            tmp.push(graph[src][i]);
            dfs(graph, tmp, graph[src][i], trg);
        }
    }
    dfs(graph, [0], 0, graph.length - 1);
    return res;
};
