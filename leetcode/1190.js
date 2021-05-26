/**
 * @param {string} s
 * @return {string}
 */
 var reverseParentheses = function(s) {
     let stack = new Array();
     for(let i = 0; i < s.length; i++) {
         if (s[i] !== ')') {
             stack.push(s[i]);
         }
         else {
             let temp = [];
             let c = stack.pop();
             while(c !== '('){
                 temp.push(c);
                 c = stack.pop();
             }
             stack = stack.concat(temp);
         }
     }
     return stack.join('');
};