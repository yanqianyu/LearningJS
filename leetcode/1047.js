/**
 * @param {string} S
 * @return {string}
 */
 var removeDuplicates = function(S) {
    let stack = [];
    for(let i = 0; i < S.length; i++) {
        if (stack.length === 0) {
            stack.push(S[i]);
        }
        else {
            let char = stack.pop();
            if (char !== S[i]) {
                stack.push(char);
                stack.push(S[i]);
            }
        }
    }
    return stack.join('');
};