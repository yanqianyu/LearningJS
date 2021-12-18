/**
 * @param {character[][]} board
 * @return {number}
 */
 var countBattleships = function(board) {
     let m = board.length, n = board[0].length;
     let res = 0;
     for(let i = 0; i < m; i++) {
         for(let j = 0; j < n; j++) {
             if (board[i][j] === '.') {
                 continue;
             }
             if (i > 0 && board[i - 1][j] === 'X') {
                 continue;
             }
             if (j > 0 && board[i][j - 1] === 'X') {
                 continue;
             }
             res += 1;
         }
     }
     return res;
};