//每隔2s输出一次"helloworld"，共输出4次
const repeatFunc = repeat(console.log, 4, 2000);
repeatFunc("helloworld");

/**
 * 
 * @param {*} fn 重复执行的函数
 * @param {*} counts 重复执行的次数
 * @param {*} time 间隔时间
 */
function repeat(fn, counts, time) {
    return function(...args) {
        let i = 0;
        let _args = [...args];
        let handle = setInterval(() => {
            i += 1;
            if (i > counts) {
                clearInterval(handle);
                return;
            }
            fn.apply(null, _args);
        }, time);
    }
}
