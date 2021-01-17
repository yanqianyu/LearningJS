// 当我们使用new的时候发生了什么
function createFactory() {
    // 1. 使用new Object()新建一个对象
    var obj = new Object();
    // 2. obj的原型指向构造函数，arguments的第一个参数是构造函数

    var constructor = [].shift.call(arguments);
    obj.__proto__ = constructor.prototype;
    // 3. 构造函数的this指向obj, 剩下的参数传进去
    var ret = constructor.apply(obj, arguments);
    return typeof ret === 'object' ? ret: obj;
}

function Otaku(name, age) {
    this.name = name;
    this.age = age;

    return {
        habit: 'game'
    }
};

var person1 = new Otaku('you', 17);
var person2 = createFactory(Otaku, 'me', 18);

console.log(person1.name);
console.log(person2.name);

console.log(person1.age);
console.log(person2.age);

console.log(person1.habit);
console.log(person2.habit);