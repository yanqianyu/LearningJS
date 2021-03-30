/**
 * js实现ajax并发请求控制
 * 实现一个批量请求函数 multiRequest(urls, maxNum)，要求如下：
 * 要求最大并发数 maxNum
 * 每当有一个请求返回，就留下一个空位，可以增加新的请求
 * 所有请求完成后，结果按照 urls 里面的顺序依次打出
 */

function multiRequest(urls=[], maxNum) {
    const len = urls.length;

    const result = new Array(len).fill(false);

    let count = 0;
    return new Promise((resolve, reject) => {
        while(count < maxNum) {
            next();
        }
        function next() {
            let current = count++;
            if (current >= len) {
                !result.includes(false) && resolve(result);
                return;
            }
            const url = urls[current];
            console.log(`开始 ${current}`, new Date().toLocaleString());
            fetch(url)
            .then((res) => {
                // 保存请求结果
                result[current] = res;
                console.log(`完成 ${current}`, new Date().toLocaleString());
                // 请求没有全部完成, 就递归
                if (current < len) {
                    next();
                }
            })
            .catch((err) => {
                console.log(`结束 ${current}`, new Date().toLocaleString());
                result[current] = err;
                // 请求没有全部完成, 就递归
                if (current < len) {
                    next();
                }
            });
        }
    })
}