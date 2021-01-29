// every, 检测数组所有元素是否都符合指定条件（函数）
// every对空数组检测返回true，不会改变原数组
Array.prototype._every = function(fn, thisValue) {
    // arr.every(function(curVal, index, arr), thisValue);
    let arr = thisValue || this;
    if (typeof fn !== 'function') {
        throw new TypeError(fn + ' is not a function');
    }
    if (!arr.length) {
        return true;
    }

    for(let i = 0; i < arr.length; i++) {
        if (!fn.call(this, arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

// filter, 创建新数组，数组中的元素都是通过检查指定数组中符合条件的所有元素
// 不对空数组做处理，不会改变原数组
Array.prototype._filter = function(fn, thisValue) {
    let arr = thisValue || this;
    if (typeof fn !== 'function') {
        throw new TypeError(fn + ' is not a function');
    }
    let result = [];
    if (!arr.length) {
        return [];
    }
    for(let i = 0; i < arr.length; i++) {
        if (fn.call(arr, arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

// find 返回符合函数判断的第一个元素的值
// 没有符合条件的元素返回undefined
// 不对空数组做处理，不会改变原数组
Array.prototype._find = function(fn, thisValue) {
    let arr = thisValue || this;
    if (typeof fn !== 'function') {
        throw new TypeError(fn + ' is not a function');
    }

    if (!arr.length) {
        return undefined;
    }

    for(let i = 0; i < arr.length; i++) {
        let result = fn.call(arr, arr[i], i, arr);
        if (result) {
            return arr[i];
        }
    }
    return undefined;
}

// forEach 对空数组不会执行回调函数
// 会改变原数组
Array.prototype._forEach = function(fn, thisValue) {
    let arr = thisValue || this;
    if (typeof fn !== 'function') {
        throw new TypeError(fn + ' is not a function');
    }
    for(let i = 0; i < arr.length; i++) {
        fn.call(arr, arr[i], i, arr);
    }
}

// from，拥有length属性的对象或可迭代的对象返回一个数组
Array.prototype._from = function(object, mapFunction, thisValue) {
    let obj = thisValue || this;
    let result = [];
    if (!object.length) {
        return result;
    }

    if (typeof object === 'string') {
        result = object.split('')
    } else {
        object.forEach(item => result.push(item))
    }
    if (typeof mapFunction !== 'function') {
      throw new TypeError(mapFunction + ' is not a function');
    }
    return result.map(mapFunction, thisValue)
}

// isArray
Array.prototype._isArray = function(item) {
    if (item.__proto__.constructor === Array) {
        return true;
    }
    else {
        return false;
    }
}

// reduce
Array.prototype._reduce = function(fn, initialValue) {
    let arr = this;
    if (typeof fn !== 'function') {
        throw new TypeError(fn + ' is not a function');
    }
    if (!arr.length) {
        throw new TypeError('数组不能为空');
    }
    let result = initialValue || 0;
    for (let i = 0; i < arr.length; i++) {
        result = fn.call(arr, result, arr[i], i, arr);
    }
    return result;
}

// sort
Array.prototype._sort = function(func) {
    let arr = this;
    if (arr.length <= 1) {
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return sort(left).concat([pivot], sort(right));
}