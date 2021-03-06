function Promise(excutor) {
    const _that = this
    _that.status = 'pending'
    _that.data = undefined
    _that.callbacks = []

    function resolve(value) {
        if (_that.status !== 'pending') return
        _that.status = 'resolved'
        _that.data = value
        if (_that.callbacks.length > 0) {
            setTimeout(() => {
                _that.callbacks.forEach(callbackobj => {
                    callbackobj.onFulfilled(value)
                })
            })
        }
    }

    function reject(reason) {
        if (_that.status !== 'pending') return
        _that.status = 'rejected'
        _that.data = reason
        if (_that.callbacks.length > 0) {
            setTimeout(() => {
                _that.callbacks.forEach(callbackobj => {
                    callbackobj.onRejected(reason)
                })
            })
        }
    }

    try {
        excutor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
        throw reason
    }
    const _that = this

    return new Promise((resolve, reject) => {
            function handle(callback) {
                try {
                    let result = callback(_that.data)
                    if (result instanceof Promise) {
                        result.then(resolve, reject)
                    } else {
                        resolve(result)
                    }
                } catch (e) {
                    reject(e)
                }
            }

            if (_that.status === 'pending') {
                _that.callbacks.push({
                    onFulfilled() {
                        handle(onFulfilled)
                    },
                    onRejected() {
                        handle(onRejected)
                    }
                })
            } else if (_that.status === 'resolved') {
                setTimeout(() => {
                    handle(onFulfilled)
                })

            } else {
                setTimeout(() => {
                    handle(onRejected)
                })
            }

        }
    )
}


Promise.prototype.catch =function (rejected) {
   return this.then(undefined,rejected)
}

Promise.prototype.finally =function (callback) {
    return this.then(
        value => {
            Promise.resolve(callback(value))
        },
        reason => {
            Promise.resolve(callback(reason))
        }
    )

}


Promise.resolve = function (value) {
    return new Promise((resolve,reject)=>{
        if(value instanceof Promise){
            value.then(resolve,reject)
        }else{
           resolve(value)
        }
    })
}

Promise.reject= function (reason) {
    return new Promise((resolve,reject)=>{
        reject(reason)
    })
}

Promise.all =function (promises) {
    let values = Array.from({length:promises.length})
    let count=1
    return new Promise((resolve,reject)=>{
        promises.forEach((p,index)=>{
            Promise.resolve(p).then(value => {
                values[index] = value
                count ++
                if(count ===promises.length){
                    resolve(values)
                }
            },reason => {
                reject(reason)
            })
        })

    })
}

Promise.race = function (promises) {
    return new Promise((resolve,reject)=>{
        promises.forEach((p,index)=>{
            Promise.resolve(p).then(value => {
                resolve(value)
            },reason => {
                reject(reason)
            })
        })
    })
}




const p1 = Promise.reject(1)
const p2 = Promise.reject(2)
const p3 = Promise.reject(3)

Promise.race([p1,p2,p3]).then(value => {
    console.log(value)
},reason => {
    console.log(reason+'---------12321')
})



