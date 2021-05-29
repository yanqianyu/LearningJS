/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function dfs(board, chars, visited, i, j, start) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || chars[start] !== board[i][j] || visited[i][j]) {
        return false;
    }

    if (start === chars.length - 1) {
        return true;
    }

    visited[i][j] = true;
    let ans = false;
    ans = dfs(board, chars, visited, i + 1, j, start + 1) 
           || dfs(board, chars, visited, i - 1, j, start + 1)
           || dfs(board, chars, visited, i, j + 1, start + 1)
           || dfs(board, chars, visited, i, j - 1, start + 1);
    visited[i][j] = false;
    return ans;
}
 var exist = function(board, word) {
    if (board == null || board.length == 0 || board[0].length == 0) {
        return false;
    }

    let visited = new Array(board.length).fill(0).map(e => new Array(board[0].length).fill(false));
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(board, word, visited, i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};