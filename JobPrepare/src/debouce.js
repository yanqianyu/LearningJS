// func 是需要回调的函数
// wait是等待时间

function debounce (func, wait) {
    // 缓存定时器id
    let timer = 0;
    return function(...args) {
        // 已经设定过定时器的话就清空上一次的定时器
        if (timer) {
            clearTimeout(timer);
        }

        // 开始新的定时器，延迟执行用户传入的方法
        timer = setTimeout(() => {
            func.apply(this, args)
        }, wait)
    }
}

// 获取当前时间戳
function now() {
    return new Date();
}

function debounceImmediate(func, wait, immediate) {
    let timer, context, args;
    // 延迟执行函数
    const later = () => setTimeout(() => {
        // 延迟函数执行完毕，清空缓存的定时器序号
        timer = null;
        if (!immediate) {
            func.apply(context, args);
            context = args = null;
        }
    }, wait);

    // 返回的函数是每次实际调用的函数
    return function(...params) {
        if (!timer) {
            // 没有创建延迟执行函数，创建一个
            timer = later();
            if (immediate) {
                func.apply(this, params);
            } 
            else {
                // 缓存参数和调用上下文
                context = this;
                args = params;
            }
        }
        else {
            // 已经有延迟执行函数，调用的时候清除原来的并重新设定一个
            clearTimeout(timer);
            // 延迟函数会重新计时
            timer = later();
        }
    }
}