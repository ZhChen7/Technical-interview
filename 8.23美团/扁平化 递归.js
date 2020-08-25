let arr = [1, 2, 3, 2, [2, 3],
    [2, [1], 2]
]

// function getFlat(arr) {
//     return arr.reduce((a, b) => {
//         return a.concat(Array.isArray(b) ? getFlat(b) : b)
//     }, [])
// }


// function getFlat() {
//     let result = []
//     return function Flat(arr) {
//         for (let item of arr) {
//             if (Array.isArray(item)) {
//                 result.concat(Flat(item))
//             } else {
//                 result.push(item)
//             }
//         }
//         return result
//     }
// }

function getFlat(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }

    return arr
}



console.log(getFlat(arr));