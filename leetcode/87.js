/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
let memory = new Map();
 var isScramble = function(s1, s2) {
     let key = s1 + s2;
     if (memory.has(key)) {
         return memory.get(key);
     }
     if (s1 === s2) {
         memory.set(key, true);
         return true;
     }
     let n = s1.length;
     let memo = new Array(26).fill(0);
     for(let i = 0; i < n; i++) {
         memo[s1[i].charCodeAt() - 'a'.charCodeAt()] += 1;
         memo[s2[i].charCodeAt() - 'a'.charCodeAt()] -= 1;
     }

     for(let i = 0; i < 26; i++) {
         if (memo[i] != 0) {
             return false;
         }
     }

     for(let i = 1; i < n; i++) {
        if ((isScramble(s1.substr(0, i), s2.substr(0, i)) && isScramble(s1.substr(i), s2.substr(i))) || (isScramble(s1.substr(0, i), s2.substr(n - i)) && isScramble(s1.substr(i), s2.substr(0, n - i)))) {
            memory.set(key, true);
            return true;
        }
    }
    memory.set(key, false);
    return false;
};