var array = [[1,2,3],4,5,6,[[7]],[]];
var result = flatten(array, [])

function flatten(arr, result) {
    for(let item of arr) {
        if (Array.isArray(item)) {
            flatten(item, result);
        }
        else {
            result.push(item);
        }
    }
    return result;
}

console.log(result);

array = [[1,2,3],4,5,6,[[7]],[9, 8]];
function flatten_reduce(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flatten_reduce(toFlatten) : toFlatten)
    }, []);
}

console.log(flatten_reduce(array));