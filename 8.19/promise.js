function Promise1(excutor) {

    const _this = this
    _this.status = 'pending'
    _this.date = undefined
    _this.callbacks = []

    function resolve(value) {
        if (_this.status !== 'pending') {
            return
        }
        _this.status = 'resolved'
        _this.date = value

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
        _this.date = reason

        if (_this.callbacks.length > 0) {
            setTimeout(() => {
                _this.callbacks.forEach(callbackobj => {
                    callbackobj.onRejected(reason)
                })
            })
        }

    }


    try {
        excutor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}


Promise1.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
        throw reason
    }

    const _this = this

    return new Promise1((resolve, reject) => {

        function handle(callback) {
            try {
                const result = callback(_this.date)

                if (result instanceof Promise) {
                    result.then(resolve, reject)
                } else {
                    resolve(_this.date)
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

        } else if (_this.status === 'resolve') {
            setTimeout(() => {
                handle(onFulfilled)
            }, 0);

        } else {
            setTimeout(() => {
                handle(onRejected)
            }, 0);
        }
    })
}



const p = new Promise1((resolve,reject) =>{
    setTimeout(() => {
        console.log(1);
    }, 0);

    resolve(2)
    console.log(3);
})


p.then(value =>{
    console.log(value);
})









Promise1.all = function(promises){
    let values = Array.from({length:promises.length})
    let count =0


    return new Promise1((reesolve,reject) =>{
        promises.forEach((p,index) =>{
            Promise.resolve(p).then(
                value =>{
                    values[index] = value
                    index ++
                    if(index=== promises.length){
                        resolve(valuesß)
                    }
                },
                reason =>{
                    reject(reason)
                }
            )
        })
    })
}



