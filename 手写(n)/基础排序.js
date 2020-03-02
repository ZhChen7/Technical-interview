function swap(m,n) {
    let temp = arr[m]
    arr[m] = arr[n]
    arr[n]= temp
}
function maoSort(arr) {
    if(arr ==null || arr.length<2) return arr
    let length = arr.length
    for (let i = length-1; i >0 ; i--) {
        for (let j = 0; j < i; j++) {
            if(arr[j]>arr[j+1]){
                swap(j,j+1)
            }
        }
    }
    return arr
}


function selectSort(arr) {
    if(arr ==null || arr.length<2) return arr
    let length = arr.length
    for (let i = 0; i < length-1; i++) {
        let min = i
        for (let j = i+1; j < length; j++) {
            if(arr[j]<arr[min]){
                min=j
            }
        }
        swap(i,min)
    }
    return arr
}

function insert(arr) {
    if(arr ==null || arr.length<2) return arr
    let length = arr.length
    for (let i = 1; i <length ; i++) {
       let temp = arr[i]
       let j=i
       while(temp < arr[j-1] && j>0){
           arr[j] = arr[j-1]
           j--
       }
       arr[j] = temp
    }
    return arr
}

let arr=[1,2,123,3,6,3,32,2,1,22,2]

console.log(maoSort(arr))
console.log(selectSort(arr))
console.log(insert(arr))
