//实现一个EventListener类，包含on，off，emit方法
class EventListener {
    constructor() {
        this.list = {}
    }
    on(key, fn) {
        if (!this.list[key]) {
            this.list[key] = []
        }
        this.list[key].push(fn)

    }
     emit(key, ...args) {
        for (let fn of this.list[key]) {
            fn.apply(this, args)
        }
    }
     off(key, fn) {
        let fnlist = this.list[key]
        if (!fnlist) return
        if (!fn) {
            fnlist.length = 0
        } else {
            fnlist.forEach((item, index) => {
                if (item === fn) {
                    fnlist.splice(index, 1)
                }
            })
        }

    }
}

let obj1=new EventListener()


obj1.on('work',value=>{
    console.log(`我是${value}啊`)
})

obj1.on('eat',value=>{
    console.log(`我在${value}啊`)
})


obj1.emit('work','zc')

obj1.off('eat')

obj1.emit('eat','吃西瓜')
