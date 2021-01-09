function debounce(func, wait, immediate) {
    // immediate 立即执行
    var timeout; // 定时器s
    var result;
    return function() {
        var context = this;
        var args = arguments;

        if (timeout) {
            clearTimeout(timeout);
        }
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(function() {
                timeout = null;
            }, wait);
            if (callNow) {
                result = func.apply(context, args);
            }
        }
        else {
            timeout = setTimeout(function() {
                func.apply(context, args)
            }, wait);
        }
        return result;
    }
}