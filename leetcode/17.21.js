/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
     const n = height.length;
     if (n < 3) {
         return 0;
     }

     let res = 0;
     const stack = [];
     for(let i = 0; i < n; i++) {
         while(stack.length && height[stack[stack.length - 1]] <= height[i]) {
             const index = stack.pop();
             const prevH = height[index];
             if (prevH === 0) {
                 continue;
             }
             for(let j = index; j < i; j++) {
                 res += prevH - height[j];
                 height[j] = prevH;
             }
         }
         stack.push(i);
     }

     if (stack.length >= 2) {
        let start = stack[0]
        for (let i = 1; i < stack.length; i++) {
          for (let j = start + 1; j < stack[i]; j++) {
            res += height[stack[i]] - height[j]
          }
          start = stack[i]
        }
      }
      return res;
};