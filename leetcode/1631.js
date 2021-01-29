/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    let row = heights.length;
    let col = heights[0].length;
    let dp = new Array(row).fill(new Array(col).fill(0));
    dp[0][0] = 1;
    let f;
    do {
        f = false;
        for(let i = 0; i < row; i++) {
            for(let j = 0; j < col; j++) {
                if(i != 0 && dp[i-1][j] != 0) {
                    let m = Math.max(dp[i-1][j], Math.abs(heights[i-1][j] - heights[i][j]) + 1);
                    if(dp[i][j] == 0 || dp[i][j] > m) {
                        dp[i][j] = m;
                        f = true;
                    }
                }

                if(j != 0 && dp[i][j-1] != 0) {
                    let m = Math.max(dp[i][j-1], Math.abs(heights[i][j-1] - heights[i][j]) + 1);
                    if(dp[i][j] == 0 || dp[i][j] > m ) {
                        dp[i][j] = m;
                        f = true;
                    }
                }

                if(i != row - 1 && dp[i+1][j] != 0) {
                    let m = Math.max(dp[i+1][j], Math.abs(heights[i+1][j] - heights[i][j]) + 1);
                    if(dp[i][j] == 0 || dp[i][j] > m) {
                        dp[i][j] = m;
                        f = true;
                    }
                }

                if(j != col - 1 && dp[i][j+1] != 0) {
                    let m = Math.max(dp[i][j+1], Math.abs(heights[i][j+1] - heights[i][j]) + 1);
                    if(dp[i][j] == 0 || dp[i][j] > m ) {
                        dp[i][j] = m;
                        f = true;
                    }
                }
            }
        }
    } while(f);
    return dp[row - 1][col - 1] - 1;
};

let arr = [[1,2,2],[3,8,2],[5,3,5]];
minimumEffortPath(arr);