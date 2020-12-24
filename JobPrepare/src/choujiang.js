function random(m, n) {
    return m + Math.floor(Math.random() * n);
}

function randomItem(arr, from=0, to=arr.length) {
    const index = random(from, to);
    return {
        index, 
        value: arr[index]
    }
}

// 洗牌算法
// Knuth-Durstenfeld Shuffle
function shuffle(arr) {
    for (let i = arr.length; i > 0; i--) {
        const {index} = randomItem(arr, 0, i);
        [arr[index], arr[i - 1]] = [arr[i - 1],  arr[index]];
    }
    return arr;
}

let members = ['胖虎', '强夫', '静香', '大雄', '哆啦A梦', '吕布', '张飞', '关羽', '刘备', '曹操', '孙权', '周瑜',
  '黄盖', '赵云', '吕蒙', '孙悟空', '猪八戒', '唐僧', '沙悟净', '光头强', '熊大', '熊二',
  '喜洋洋', '美羊羊', '红太狼', '灰太狼',
];

console.log(shuffle(members).slice(-3)); // 抽取3名获奖者