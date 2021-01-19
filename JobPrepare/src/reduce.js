let arr = [
    {
        "a": 1
    },
    {
        "b": 1
    }
];

let newObject = arr.reduce((pre, cur) => {
    for (let key in cur) {
        if (cur.hasOwnProperty(key) === true) {
            pre[key] = cur[key]
        }
    }
    return pre;
});

console.log(newObject);