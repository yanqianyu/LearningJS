/**
 * @param {number[][]} wall
 * @return {number}
 */
 var leastBricks = function(wall) {
     let mp = new Map();
     for(let i = 0; i < wall.length; i++) {
         let list = wall[i];
         let sum = 0, len = list.length;
         for(let j = 0; j < len - 1; j++) {
             sum += list[j];
             if (Map.has(sum)) {
                 mp.set(sum, mp.get(sum) + 1);
             }
             else {
                 mp.set(sum, 1);
             }
         }
     }
     let max = 0;
     for(let [_, c] of mp.entries()) {
         max = Math.max(c, max);
     }
     return wall.length - max;
};