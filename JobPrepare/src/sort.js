var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// 扁平化 去重 升序
function flatten(arr) {
    if ([].every.call(arr, item => !Array.isArray(item))) {
        return arr;
    }
    return [].reduce.call(arr, (pre, cur) => {
        if(Array.isArray(cur)) {
            return pre.concat(flatten(cur));
        }
        else {
            return pre.concat(cur);
        }
    }, []);
}

var flattenArray = flatten(arr);
console.log(flattenArray);


var duplicatedArray = [...new Set(flattenArray)];
console.log(duplicatedArray);

duplicatedArray.sort((a, b) => a - b);
console.log(duplicatedArray);