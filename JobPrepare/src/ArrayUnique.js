function unique(array, isSorted, iteratee) {
    let res = [];
    let seen = [];
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        let computed = iteratee? iteratee(value, i, array): value;
        if (isSorted) {
            if (!i || seen !== computed) {
                res.push(value)
            }
            seen = computed;
        }
        else if (iteratee) {
            if (seen.indexOf(computed) === -1) {
                seen.push(computed);
                res.push(value);
            }
        }
        else if (res.indexOf(value) === -1) {
            res.push(value);
        }   
    }
    return res;
}

var array3 = [1, 1, 'a', 'A', 2, 2];

console.log(unique(array3, false, function(item){
    return typeof item == 'string' ? item.toLowerCase() : item
})); // [1, "a", 2]