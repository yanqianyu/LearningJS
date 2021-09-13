/**
 * @param {number[][]} points
 * @return {number}
 */
 var numberOfBoomerangs = function(points) {
     if (points.length === 1) {
         return 0;
     }
     let record = new Map();
     let res = 0;
     for(let i = 0; i < points.length; i++) {
         for(let j = 0; j < points.length; j++) {
             if (j !== i) {
                let x = points[i][0] - points[j][0];
                let y = points[i][1] - points[j][1];
                let d = x * x + y * y;
                if (record.has(d)) {
                    record.set(d, record.get(d) + 1);
                }
                else {
                    record.set(d, 1);
                }
             }
         }
         record.forEach((val, key) => {
             res += val * (val - 1);
         })
         record.clear();
     }
     return res;
};