function makeIterator(arr) {
    let nextIndex = 0
    return {
        next: function () {
            if (nextIndex < arr.length) {
                return {
                    value: arr[nextIndex++],
                    done: false
                }
            } else {
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}

let g = makeIterator([1,2,3,4])
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
