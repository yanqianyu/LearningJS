/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if(matrix.length == 0) return 0;
    let saveWidthsArray = new Array(matrix.length);
    for(let i = 0; i < matrix.length; i++) {
        saveWidthsArray[i] = new Array(matrix.length).fill(0);
    }

    for(let i = 0; i < matrix.length; i++) {
        let width = 0;
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] == 1) {
               width++;
            } else {
               width = 0;
            }
            saveWidthsArray[i][j] = width;            
        }
    }

    let maxRet = 0;
    for(let i = 0; i < saveWidthsArray.length; i++) {
        for(let j = 0; j < saveWidthsArray[0].length; j++) {
            if(saveWidthsArray[i][j] >= 1) {
                let y = 1;
                let x = saveWidthsArray[i][j];
                maxRet = Math.max(maxRet, x * y);
                for(let z = i - 1; z >= 0; z--) {
                        y++;
                        x = Math.min(x, saveWidthsArray[z][j]); 
                        maxRet = Math.max(maxRet, x * y); 
                }
            }
        }
    }
    return  maxRet;  
};