> ## 2019/12/07

**题目**：手写 Promise



### 手写 Promise

~~~js
(function (window) {
    /*
    Promise：构造 Promise 函数对象
    excutor: 执行构造器 （同步执行）

 */
    function Promise(excutor) {

        const _that = this
        _that.status = 'pending' // 给 promise对象指定 status属性,初始值为 pending
        _that.data = undefined   //给 promise 对象指定一个用于储存结果数据的属性
        _that.callbacks = [] // 每个元素的结构：{ onFulfilled(){}, onRejected(){}}

        function resolve(value) {

            // 如果当前状态不是 pending，直接结束
            if (_that.status !== 'pending') return


            // 将 状态改为 resolved
            _that.status = 'resolved'

            // 保存 value 数据
            _that.data = value

            // 如果有待执行callback 函数，立刻异步执行回调函数
            if (_that.callbacks.length > 0) {
                setTimeout(() => {
                    _that.callbacks.forEach(callbacksObj => {
                        callbacksObj.onFulfilled(value)
                    })
                })
            }

        }


        function reject(reason) {

            // 如果当前状态不是 pending，直接结束
            if (_that.status !== 'pending') return

            // 将 状态改为 rejected
            _that.status = 'rejected'

            // 保存 value 数据
            _that.data = reason

            // 如果有待执行callback 函数，立刻异步执行回调函数
            if (_that.callbacks.length > 0) {
                setTimeout(() => {
                    _that.callbacks.forEach(callbacksObj => {
                        callbacksObj.onRejected(reason)
                    })
                })
            }

        }


        //立刻同步执行 excutor
        try {
            excutor(resolve, reject)
        } catch (error) { //如果执行器抛出异常，promise对象变为 rejected 状态
            reject(error)
        }


    }


    /*
      Promise原型对象的 then() --- *思路*

        1、指定成功和失败的回调函数
        2、返回一个新的 promise 对象
        3、返回promise的结果由 onFulfilled/onRejected执行结果决定
        4、指定 onFulfilled/onRejected的默认值
     */
    Promise.prototype.then = function (onFulfilled, onRejected) {

        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : reason => reason //向后传递成功的value

        //指定默认的失败的回调（实现错误/异常穿透的关键点）
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { //向后传递失败的reason
            throw reason
        }

        const _that = this


        //返回一个新的promise 对象
        return new Promise((resolve, reject) => {

            /*
                调用指定的回调函数处理，根据执行结果，改变return的promise的状态
             */
            function handle(callback) {
                /*
                       1. 如果抛出异常，return 的promise就会失败，reason 就是 error
                       2. 如果回调函数返回的不是promise，return的promise就会成功，value就是返回的值
                       3.如果回调函数返回的是promise，return的promise的结果就是这个promise的结果
                    */

                try {
                    const result = callback(_that.data)

                    // 3.如果回调函数返回的是promise，return的promise的结果就是这个promise的结果
                    if (result instanceof Promise) {
                        // result.then(
                        //     value => resolve(value), //当result成功时，让return的promise也成功
                        //     reason => reject(reason)  //当result失败时，让return的promise也失败
                        // )

                        result.then(resolve, reject)

                    } else {
                        //  2. 如果回调函数返回的不是promise，return的promise就会成功，value就是返回的值
                        resolve(result)
                    }
                } catch (error) {
                    //1. 如果抛出异常，return 的promise就会失败，reason 就是 error

                    reject(error)
                }
            }


            if (_that.status === 'pending') {
                //假设当前状态还是 pending 状态，将回调函数 保存起来
                _that.callbacks.push({
                    onFulfilled(value) {
                        handle(onFulfilled) //改promise的状态为 onFulfilled状态
                    },
                    onRejected(reason) {
                        handle(onRejected)  //改promise的状态为 onRejected状态
                    }
                })
            } else if (_that.status === 'resolved') { //如果当前是resolved状态，异步执行onresolved并改变return的promise状态
                setTimeout(() => {
                    handle(onFulfilled)
                })
            } else { //onRejected
                setTimeout(() => { //如果当前是rejected状态，异步执行onRejected并改变return的promise状态
                    handle(onRejected)
                })
            }

        })

    }


    /*
        Promise原型对象的 catch()
        指定失败的回调函数
        返回一个新的 promise 对象
     */
    Promise.prototype.catch = function (onRejected) {
        return this.then(undefined, onRejected)
    }


    /*
        Promise函数对象的 resolve()
        返回 指定结果的 "成功" 的 promise 对象
     */
    Promise.resolve = function (value) {
        //返回 一个 成功/失败 的promise
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) { //使用value的结果作为 promise 的结果
                value.then(resolve, reject)
            } else { //value不是promise => promise变为成功，数据是 value
                resolve(value)
            }
        })

    }

    /*
        Promise函数对象的 reject()
        返回 指定结果的 "失败" 的 promise 对象
     */
    Promise.reject = function (reason) {

        //返回 一个失败的 promise
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }


    /*
        Promise函数对象的 all()
        返回 一个promise，只有当所有promise都成功时才成功，否则只要有一个失败就 失败
     */
    Promise.all = function (promises) {

        const values = Array.apply(null, {length: promises.length})//用来保存所有成功 value的数组
        let resolvedCount = 0

        return new Promise((resolve, reject) => {

            //遍历获取每一个 promise的结果
            promises.forEach((p, index) => {
                Promise.resolve(p).then(
                    //p成功，将成功的 value 保存 values
                    // values.push(value)  => 不能这样
                    value => {

                        resolvedCount++ //成功的次数

                        values[index] = value

                        //如果全部成功了，将return的 promise 改为成功
                        if (resolvedCount === promises.length) {
                            resolve(values)
                        }

                    },
                    reason => { //只要一个失败了，return 的promise就失败
                        reject(reason)
                    }
                )
            })
        })
    }


    /*
        Promise函数对象的 race()
        返回 一个promise，其结果由第一个完成的promise来决定
     */
    Promise.race = function (promises) {
        return new Promise((resolve, reject) => {
            //遍历获取每一个 promise的结果
            promises.forEach((p, index) => {
                Promise.resolve(p).then(
                    value => { // 一旦由成功了，将return 变为失败
                        resolve(value)
                    },

                    reason => { //只要一个失败了，return 的promise就失败
                        reject(reason)
                    }
                )
            })
        })
    }
    
    window.Promise = Promise
})(window)
~~~







