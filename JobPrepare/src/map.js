// 手写数组map方法

// var new_array = arr.map(function callback(currentValue[, index[, array]]) {
//     // Return element for new_array 
//    }[, thisArg])

Array.prototype.myMap = function(fn, thisArg) {
    let arr = thisArg || this;
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        let r = fn.call(arr, arr[i], i, arr);
        res.push(r);
    }
    return res;
}

let arr = [2, 3, 4, 5];
let res = arr.myMap((item) => {
    return item * item;
})

console.log(res);