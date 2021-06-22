/**
 * @param {string} s
 * @return {string[]}
 */
 var permutation = function(s) {
    const res = [];
    if (s.length === 0)
        return [];
    if (s.length === 1)
        return [s];
    if (s.length === 2)
        return [s.charAt(0) + s.charAt(1), s.charAt(1) + s.charAt(0)];

    for (let i = 0, len = s.length; i < len; i++) {
        const firstChar = s.charAt(i);
        const secondPart = s.substr(0,i)+s.substr(i+1,len);
        permutation(secondPart).forEach(j => {
            if (res.indexOf(firstChar + j) < 0) {
                res.push(firstChar + j);
            };
        });
    };
    return res;
};