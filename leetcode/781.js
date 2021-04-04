/**
 * @param {number[]} answers
 * @return {number}
 */
 var numRabbits = function(answers) {
     let map = new Map();
     let num = 0;
     for(let answer of answers) {
         if (map.has(answer) && map.get(answer) > 0) {
             map.set(answer, map.get(answer) - 1);
         }
         else {
             num += answer + 1;
             map.set(answer, answer);
         }
     }
     return num;
};