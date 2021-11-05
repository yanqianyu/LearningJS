/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
 var isNStraightHand = function(hand, groupSize) {
     let map = new Map();
     hand.sort((a, b) => a - b);
     for(let i = 0; i < hand.length; i++) {
         if (map.has(hand[i])) {
             map.set(hand[i], map.get(hand[i]) + 1);
         }
         else {
             map.set(hand[i], 1);
         }
     }

     for(let [key, value] of map) {
         while(map.get(key) > 0) {
             for(let i = 0; i < groupSize; i++) {
                 let cnt = map.get(key + i);
                 if (!cnt || cnt <= 0) {
                     return false;
                 }
                 map.set(key + i, map.get(key + i) - 1);
             }
         }
     }
     return true;
};