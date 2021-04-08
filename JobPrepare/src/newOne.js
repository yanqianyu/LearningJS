// 实现构造函数，new的时候每次加一
function PlusOne() {
    PlusOne.count += 1;
}
PlusOne.count = 0;

let a = new PlusOne();
console.log(PlusOne.count);

let b = new PlusOne();
console.log(PlusOne.count);