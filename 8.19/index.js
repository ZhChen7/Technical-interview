function getFun(fn, delay, count) {
    let countNum = 0
    let interout = setInterval(() => {
        fn()
        countNum++
        if (countNum === count) {
            clearInterval(interout)
        }

    }, delay);
}

getFun(() => {
    console.log(2);
}, 1000, 5)