/**
 * @param {number[][]} board
 * @return {number}
 */
 var snakesAndLadders = function(board) {
     const n = board.length;
     const vis = new Array(n * n + 1).fill(0);
     const queue = [[1, 0]];
     while(queue.length) {
         const p = queue.shift();
         for(let i = 1; i <= 6; i++) {
             let next = p[0] + i;
             if (next > n * n) {
                 break;
             }
             const rc = id2rc(next, n);
             if (board[rc[0]][rc[1]] > 0) {
                 next = board[rc[0]][rc[1]];
             }

             if (next === n * n) {
                 return p[1] + 1;
             }
             if (!vis[next]) {
                 vis[next] = true;
                 queue.push([next, p[1] + 1]);
             }
         }
     }
     return -1;
};

const id2rc = (id, n) => {
    let r = Math.floor((id - 1) / n), c = (id - 1) % n;
    if (r % 2 === 1) {
        c = n - 1 - c;
    }
    return [n - 1 - r, c];
}