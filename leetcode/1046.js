/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function(stones) {
    stones.sort((a, b) => a - b);
    while (stones.length > 1) {
        const one = stones.pop();
        const two = stones.pop();

        if (one - two !== 0) {
            stones.push(one - two);
            stones.sort((a, b) => a - b);
        }
    }
    return stones[0] || 0;
};