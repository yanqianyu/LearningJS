function throttle(func, wait) {
    var context, args;
    var previous = 0;
    return function () {
        var now = +new Date();
        context = this;
        args = arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
}

var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    container.innerHTML = count++;
}

container.onmousemove = throttle(getUserAction, 1000);