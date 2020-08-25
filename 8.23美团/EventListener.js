class EventListener {
    constructor() {
        this.list = []
    }
    on(key, fn) {
        if (!this.list[key]) {
            this.list[key] = []
        }
        this.list[key].push(fn)
    }

    emit(key, ...arg) {
        for (let fn of this.list[key]) {
            fn.apply(this, ...arg)
        }
    }

    off(key, fn) {
        let fnlist = this.list[key]
        if (!fnlist) {
            return
        }
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