function throttle2(func, wait) {
    var timeout;
    var previous = 0;
    var context, args;
    return function () {
        context = this;
        args = arguments;
        if (!timeout) {
            timeout = setTimeout(function() {
                timeout = null;
                func.apply(context, args);
            }, wait);
        }
    }
}

var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    container.innerHTML = count++;
}

container.onmousemove = throttle2(getUserAction, 3000);