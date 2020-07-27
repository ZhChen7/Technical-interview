function Promise(excutor) {
    const _that = this
    _that.status = 'pending'
    _that.date = undefined
    _that.callbacks = []

    function resolve(value) {
        if (_that.status !== 'pending') return;
        _that.status = 'resolved'
        _that.date = value

        if (_that.callbacks.length > 0) {
            setTimeout(() => {
                _that.callbacks.forEach(callbackobj => {
                    callbackobj.onFulfilled(value)
                });
            });
        }
    }


    function reject(reason) {
        if (_that.status !== 'pending') return;
        _that.status = 'rejected'
        _that.date = reason

        if (_that.callbacks.length > 0) {
            setTimeout(() => {
                _that.callbacks.forEach(callbackobj => {
                    callbackobj.onRejected(reason)
                });
            });
        }
    }

    try {
        excutor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}



Promise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
        throw reason
    }
    const _that = this
    return new Promise((resolve, reject) => {
        function handle(callback) {
            try {
                const result = callback(_that.date)
                if (result instanceof Promise) {
                    result.then(resolve, reject)
                } else {
                    resolve(result)
                }
            } catch (error) {
                reject(error)
            }
        }
        if (_that.status === 'pending') {
            _that.callbacks.push({
                onFulfilled(value) {
                    handle(onFulfilled)
                },
                onRejected() {
                    handle(onRejected)
                }
            })
        } else if (_that.status === 'resolved') {
            setTimeout(() => {
                handle(onFulfilled)
            });

        } else {
            setTimeout(() => {
                handle(onRejected)
            });
        }
    })
}


Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
}


Promise.prototype.finally = function (callback) {
    return this.then(value => {
        Promise.resolve(callback(value))
    }, reason => {
        Promise.resolve(callback(reason))
    })
}



Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
        if (value instanceof Promise) {
            value.then(resolve, reject)
        } else {
            resolve(value)
        }
    })
}

Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason)
    })
}


Promise.all = function (promises) {
    const values = Array.apply(null, {
        length: promises.length
    })
    let resolveCount = 0
    return new Promise((resolve, reject) => {
        promises.forEach((p, index) => {
            Promise.resolve(p).then(
                value => {
                    resolveCount++;
                    values[index] = value
                    if (resolveCount === promises.length) {
                        resolve(values)
                    }

                },
                reason => {
                    reject(reason)
                }
            )
        })
    })
}


Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((p, index) => {
            Promise.resolve(p).then(
                value => {
                    resolve(value)
                },
                reason => {
                    reject(reason)
                }
            )
        })
    })
}