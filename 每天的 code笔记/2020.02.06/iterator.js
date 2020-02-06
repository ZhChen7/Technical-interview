let a = makeiterator([1, 2])
function makeiterator(arr) {
    var nextindex = 0
    return {
        next: function () {
            return nextindex < arr.length ?
                {value: arr[nextindex++], done: false} :
                {value: undefined, done: true}
        }
    }
}
console.log(a.next())

