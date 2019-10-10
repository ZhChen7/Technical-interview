// function params() {
//     let search = '?a=hello&b=world'
//     search = search.slice(1)
//
//     let searcharr= search.split('&')
//     let res={}
//     searcharr.forEach(function (value, index, array) {
//        let [a,b] =value.split('=')
//         console.log([a,b])
//         res[a]=b
//     })
//
//     console.log(res)
// }
//
// params()

//
// var obj={}
// obj.age=1
// obj.name=2
// obj[hobby]='lol'
//
//
// console.log(obj)


function params() {
    let search = '?a=hello&b=world'
    search = search.substr(1, search.length);
    const res = {};
    if (!search) return res;
    search.split('&').map(item => {
        const [key, value] = item.split('=');
        console.log(item.split('='))

        res[key] = decodeURIComponent(value);
    });
    return res;
}

console.log(params())





