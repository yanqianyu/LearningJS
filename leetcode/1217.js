/**
 * @param {number[]} position
 * @return {number}
 */
 var minCostToMoveChips = function(position) {
     let even = 0, odd = 0;
     for(let i = 0; i < position.length; i++) {
         if (position[i] % 2) {
             odd += 1;
         }
         else {
             even += 1;
         }
     }

     return Math.min(even, odd);
};