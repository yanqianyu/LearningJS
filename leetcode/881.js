/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
 var numRescueBoats = function(people, limit) {
     let res = 0;
     let right = people.length - 1;
     let left = 0;
     people.sort((a, b) => a - b);
     while(left <= right) {
         if (left === right) {
             res += 1;
             break;
         }
         if (people[left] + people[right] > limit) {
             res += 1;
             right -= 1;
         }
         else {
             res += 1;
             right -= 1;
             left += 1;
         }
     }
     return res;
};