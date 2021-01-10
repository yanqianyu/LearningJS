class Father {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    show() {
        console.log(`我叫:${this.name}， 今年${this.age}岁`);
    }
};

// 通过extends关键字实现继承
class Son extends Father {};

let son = new Son('陈先生', 3000);

son.show(); // 我叫陈先生 今年3000岁