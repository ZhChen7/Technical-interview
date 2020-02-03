/*
    打印出 1 - 10000 之间的所有对称数 例如：121、1331 等
 */


function f(num) {
    return num.toString() === num.toString().split('').reverse().join('')
}

for (var i = 1; i <= 10000; i++) {
    if (f(i)) {
        console.log(i)
    }
}



