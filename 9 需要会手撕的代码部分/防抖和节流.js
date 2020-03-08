//防抖
function debounce(fn, delay) {
    let timeout = null
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}


//节流
function throttle(fn,delay) {
    let canRun = true
    return function () {
        if(!canRun) return
        canRun = false
        setTimeout(()=>{
            fn.apply(this,arguments)
            canRun = true
        },delay)
    }
}




