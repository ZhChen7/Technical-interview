let pubSub = {
    list: {},
    subscribe: function (key, fn) { //订阅
        if (!this.list[key]) {
            this.list[key] = []
        }
        this.list[key].push(fn)
    },
    publish: function (key, ...args) { //发布
        for (let fn of this.list[key]) {
            fn.apply(this, args)
        }
    },
    unSubscribe: function (key, fn) { //取消订阅
        let fnlist = this.list[key]
        if (!fnlist) return
        if (!fn) {
            fnlist.length = 0
        } else {
            fnlist.forEach((item, index) => {
                if (item === index) {
                    fnlist.splice(index, 1)
                }
            })
        }
    }

}

pubSub.subscribe('onwork', time => {
    console.log(`上班了：${time}`);
})
pubSub.subscribe('offwork', time => {
    console.log(`下班了：${time}`);
})
pubSub.subscribe('launch', time => {
    console.log(`吃饭了：${time}`);
})

// // 发布
pubSub.publish('offwork', '18:00:00');
pubSub.publish('launch', '12:00:00');

pubSub.unSubscribe('onwork');
pubSub.publish('onwork', '1222:00:00');