// let arr = [1, 2, 3]
// const addFun = (a, b) => {
//     return a*10+b;
// }

// let result = arr.reduce(addFun, 4)
// console.log(result);

let str = 'asdasda11sdasd'

const getStrNum = (str) => {
    console.log(str);
    const result = str.split('').reduce((res, cur) => {
        res[cur] ? res[cur]++ : res[cur] = 1
        return res
    }, {})

    return result
}

console.log(getStrNum(str));