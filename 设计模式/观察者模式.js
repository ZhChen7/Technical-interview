// 目标者类
class Subject {
    constructor() {
        this.observers = [];  // 观察者列表
    }
    // 添加
    add(observer) {
        this.observers.push(observer);
    }

    // 删除
    remove(observer) {
        let idx = this.observers.findIndex(item => item === observer);
        idx > -1 && this.observers.splice(idx, 1);
    }

    // 通知
    notify() {
        for (let observer of this.observers) {
            observer.update();
        }
    }
}

// 观察者类
class Observer {
    constructor(name) {
        this.name = name;
    }

    // 目标对象更新时触发的回调
    update() {
        console.log(`目标者通知我更新了，我是：${this.name}`);
    }
}

// 实例化目标者
let subject = new Subject();

// 实例化两个观察者
let obs1 = new Observer('前端开发者');
let obs2 = new Observer('后端开发者');

// 向目标者添加观察者
subject.add(obs1);
subject.add(obs2);

// 目标者通知更新
subject.notify();
// 输出：
// 目标者通知我更新了，我是前端开发者
// 目标者通知我更新了，我是后端开发者
