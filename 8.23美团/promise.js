function Promise(excutor) {

    const _this = this
    _this.status = 'pending'
    _this.data = undefined
    _this.callbacks = []


    function resolve(value) {
        if (_this.status !== 'pending') {
            return
        }
        _this.status = 'resolved'
        _this.data = value

        if (_this.callbacks.length > 0) {
            setTimeout(() => {
                _this.callbacks.forEach(callbackobj => {
                    callbackobj.onFulfilled(value)
                })
            })
        }

    }


    function reject(reason) {
        if (_this.status !== 'pending') {
            return
        }
        _this.status = 'resolved'
        _this.data = reason

        if (_this.callbacks.length > 0) {
            setTimeout(() => {
                _this.callbacks.forEach(callbackobj => {
                    callbackobj.onRejected(reason)
                })
            })
        }

    }

    try {
        excutor(reslove, reject)
    } catch (error) {
        reject(error)
    }
}



Promise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value

    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
        throw reason
    }
    const _this = this
    return new Promise((resolve, reject) => {

        function handle(callbak) {
            try {
                const result = callbak(_this.data)
                if (result instanceof Promise) {
                    result.then(resolve, reject)
                } else {
                    reslove(result)
                }

            } catch (error) {
                reject(error)
            }
        }


        if (_this.status === 'pending') {
            _this.callbacks.push({
                onFulfilled() {
                    handle(onFulfilled)
                },
                onRejected() {
                    handle(onRejected)
                }
            })
        } else if (_this.status === 'resolved') {
            setTimeout(() => {
                handle(onFulfilled)
            })
        } else {
            setTimeout(() => {
                handle(onRejected)
            })
        }
    })

}


Promise.all = function (promise) {
    let values = Array.from({
        length: promise.length
    })
    let count = 0

    return new Promise((resolve, reject) => {
        promises.forEach((p, index) => {
            Promise.resolve(p).then(
                value => {
                    values[index] = value
                    count++

                    if (count === promises.length) {
                        reslove(values)
                    }
                },
                reason => {
                    reject(reason)
                }
            )
        })
    });

}



const p = Promise.all([1, 2, 3])

p.then(
    value => {
        console.log(value);
    }
)