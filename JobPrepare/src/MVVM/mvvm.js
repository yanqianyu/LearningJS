// step 1: 追踪变化
// step 2: 依赖收集
// step 3: watcher
function defineReactive(data, key, val) {
    let dep = new Dep();
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            if (Dep.target) {
                dep.addSub(Dep.target);
            }
            return val;
        }
        set: function(newVal) {
            if (val === newVal) {
                return;
            }
            val = newVal;
            dep.notify();
        }
    });
}

// step 2: 依赖收集
// 观察到数据的属性值发生改变时，可以通知使用了这个数据的视图层
// 事件的发布订阅模式（订阅者Dep，观察者Watcher）
class Dep {
    constructor() {
        // 存放的是watcher
        this.sub = [];
    }

    addSub(sub) {
        this.sub.push(sub);
    }

    notify() {
        this.subs.forEach((sub) => {
            sub.update();
        })
    }
}

// watcher相当于一个中介，数据变化时通知watcher 然后watcher再通知其他地方
class Watcher {
    constructor(obj, key, cb) {
        // 将 Dep.target 指向自己
        // 然后触发属性的 getter 添加监听
        // 最后将 Dep.target 置空
        Dep.target = this
        this.cb = cb
        this.obj = obj
        this.key = key
        this.value = obj[key]
        Dep.target = null
    }
    update() {
        this.value = this.obj[this.key];
        // cb调用模拟试图更新
        this.cb(this.value);
    }
}