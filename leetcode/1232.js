/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if (coordinates.length === 2) {
        return true;
    }
    let x0 = coordinates[0][0], y0 = coordinates[0][1];
    let x1 = coordinates[1][0], y1 = coordinates[1][1];
    for (let i = 2; i < coordinates.length; i++) {
        let x = coordinates[i][0], y = coordinates[i][1];
        if ((y0 - y1) * (x1 - x) !== (x0 - x1) * (y1 - y)) {
            return false;
        }
    }
    return true;
};