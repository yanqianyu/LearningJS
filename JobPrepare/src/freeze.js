function fakeFreeze(obj) {
    if (obj instanceof Object) {
        // Object.seal()方法可以让对象不能被扩展、删除属性等等
        // 但是现有属性可以更改
        Object.seal(obj);
        for (let p in obj) {
            if (obj.hasOwnProperty(p)) {
                Object.defineProperty(obj, p, {
                    writable: false
                });
                fakeFreeze(obj[p]);
            }
        }
    }
}

const people = {
    name: 'me'
};

fakeFreeze(people);
people.name = 'you';
console.log(people);

// Object.freeze只能保证第一层属性不变，就是说如果对象属性之还是一个复杂数据类型，那么就是能修改成功的
// Object.freeze(people);
// people.name = 'he';
// console.log(people);