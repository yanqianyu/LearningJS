/**
 * @param {string} s
 * @return {boolean}
 */
 var checkValidString = function(s) {
     let leftStack = [];
     let asteriskStack = [];
     let n = s.length;
     for(let i = 0; i < n; i++) {
         const c = s[i];
         if (c === '(') {
             leftStack.push(i);
         }
         else if (c === '*') {
             asteriskStack.push(i);
         }
         else {
             if (leftStack.length) {
                 leftStack.pop();
             }
             else if (asteriskStack.length) {
                 asteriskStack.pop();
             }
             else {
                 return false;
             }
         }
     }
     while(leftStack.length && asteriskStack.length) {
         let leftIndex = leftStack.pop();
         let asteriskStackIndex = asteriskStack.pop();
         if (leftIndex > asteriskStackIndex) {
             return false;
         }
     }
     return leftStack.length === 0;
};