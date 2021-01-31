// Promise.finally() 不管promise对象最后状态如何，都会执行的操作
// 接受一个普通的回调函数作为参数
Promise.prototype.finally = function(callback) {
    let P = this.constructor;
    return this.then(function(value) {
        return P.resolve(callback()).then(function() {
            return value;
        })
    }, function(reason) {
        return P.resolve(callback()).then(function () {
            throw reason;
        })
    })
}

// Promise.all
Promise.prototype.all = function (list) {
    return new Promise((resolve, reject) => {
        let res = [];
        let counts = 0;
        for(let [i, p] of list) {
            resolve(p).then(res => {
                counts += 1;
                res[i] = res;
                if (counts ===  list.length) {
                    resolve(res);
                }
            }, err => {
                reject(err);
            })
        }
    })
}

// Promise.race
Promise.prototype.race = function (lists) {
    return new Promise((resolve, reject) => {
        lists.forEach(promise => {
            // promise.then(resolve, reject);
            // 兼容非promise对象
            Promise.resolve(promise).then(resolve, reject);
        });
    })
}