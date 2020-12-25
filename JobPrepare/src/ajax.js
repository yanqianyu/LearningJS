var mybutton = document.getElementById("myButton");
mybutton.addEventListener('click', function() {
    ajax({
        url: "https://www.baidu.com",
        method: "get",
        success: (resp) => {
            console.log("success: " + resp);
        },
        fail: (req) => {
            console.log("fail " + req.status);
        }
    });
})

function ajax(options) {
    let url = options.url;
    let method = options.method;
    let success = options.success;
    let fail = options.fail;

    let request = new XMLHttpRequest();
    request.open(method, url);
    
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                success.call(undefined, request.responseText);
            }
            else if (request.status >= 400) {
                fail.call(undefined, request);
            }
        }
    }

    request.send();
}