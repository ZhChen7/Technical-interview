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
        let fnList = this.list[key]
        if (!fnList) {
            return
        }
        if (!fn) {
            fnList.length = 0
        }

        fnList.forEach((item, index) => {
            if (item === fn) {
                fnList.splice(index, 1)
            }
        })

    }
}