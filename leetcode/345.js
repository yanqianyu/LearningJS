/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
     let low = 0, high = s.length - 1;
     let arr = Array.from(s);
     while(low < high) {
         while (low < s.length && !isVowel(arr[low])) {
             low++;
         }
         while (high > 0 && !isVowel(arr[high])) {
             high--;
         }
         if (low < high) {
             let c = arr[low];
             arr[low] = arr[high];
             arr[high] = c;
             low++;
             high--;
         }
     }
     return arr.join('');
};

function isVowel(c) {
    return ['a','e', 'i', 'o', 'u', 'A','E', 'I', 'O', 'U'].includes(c);
}

reverseVowels('hello');