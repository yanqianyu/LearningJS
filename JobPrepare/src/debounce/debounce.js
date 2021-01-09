function debounce(func, wait, immediate) {
    var timeout, result;
    var debounced =  function() {
        var context = this;
        var args = arguments;

        if (timeout) { // 如果有定时器
            clearTimeout(timeout); // 清除之前的定时器
        }
        
        if (immediate) { // 需要立即执行 
            // 如果已经执行过 则不再执行
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
                func.apply(context, args) // 绑定正确的this
            }, wait); // 闭包
        }
        return result;
    }

    debounced.cancel = function() {
        clearTimeout(timeout);
        timeout = null;
    };
    return debounced;
}

var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(this);
    console.log(e);
    container.innerHTML = count++;
}

var setUseAction = debounce(getUserAction, 10000, true)
container.onmousemove = setUseAction;
document.getElementById("cancel").addEventListener('click', function(){
    setUseAction.cancel();
})