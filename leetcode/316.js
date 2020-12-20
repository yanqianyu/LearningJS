/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let lastPos = new Array(26);
    for (let i = 0; i < s.length; i++) {
        lastPos[s[i].charCodeAt() - 'a'.charCodeAt()] = i;
    }

    let stack = new Array();
    let flags = new Array(26).fill(false); // 记录每个字母在栈中是否已经出现

    for(let i = 0; i < s.length; i++) {
        if (stack.length === 0) {
            stack.push(s[i]);
            flags[s[i].charCodeAt() - 'a'.charCodeAt()] = true;
        }
        else {
            if (flags[s[i].charCodeAt() - 'a'.charCodeAt()] === false) { // 没在栈中出现
                while (stack.length > 0 && s[i] < stack[stack.length - 1]) { // 比栈顶元素小
                    let top = stack[stack.length - 1];
                    if (lastPos[top.charCodeAt() - 'a'.charCodeAt()] > i) { // 栈顶元素之后还会出现
                        stack.pop();
                        flags[top.charCodeAt() - 'a'.charCodeAt()] = false;
                    }
                    else { // 栈顶元素之后不会出现
                        break;
                    }
                }
                
                stack.push(s[i]);
                flags[s[i].charCodeAt() - 'a'.charCodeAt()] = true;
            }
        }
    }

    return stack.join('');
};

console.log(removeDuplicateLetters('cbacdcbc'));