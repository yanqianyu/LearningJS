const funcs = [
    function(num, next) {
        num += 1;
        num = next(num);
        num += 1;
        return num;
    },
    function(num, next) {
        num += 2;
        num = next(num);
        num += 2;
        return num;
    }
];

// 怎么改成异步操作呢？
function use(funcs) {
    return function(num) {
        let next = (num) => {
            return num;
        }

        let next2 = function (num) {
            return funcs[1](num, next);
        }
        return funcs[0](num, next2);
    }
}

const wrapper = use(funcs);
console.log(wrapper(2)); // 8
console.log(wrapper(5)); // 11