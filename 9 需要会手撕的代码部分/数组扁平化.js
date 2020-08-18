let arr = [[1,2],4,[4,[[1],1]]]


// console.log(arr.toString().split(',').map(Number));
function getArr (arr){
    return [].concat(
        ...arr.map((item) =>{
           return Array.isArray(item)? getArr(item) : item
        })
    )
}


console.log(getArr(arr));