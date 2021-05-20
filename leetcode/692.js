/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
     const cnt = new Map();
     for(let word of words) {
         cnt.set(word, (cnt.get(word) || 0) + 1);
     }

     const res = [];
     for(let entry of cnt.keys()) {
         res.push(entry);
     }
     res.sort((word1, word2) => {
         return cnt.get(word1) === cnt.get(word2) ?
                word1.localeCompare(word2) : cnt.get(word2) - cnt.get(word1);
     });
     return res.slice(0, k);
};