// function loading(c,w,x) {
//     let n = w.length
//     Element d = new Element(n)
//     for (var i = 0; i < n; i++) {
//         d[i] = new Element(w[i],i)
//     }
//     sort(d)
//     let opt = 0
//     for (var i = 0; i < n; i++) {
//         x[i]=0
//     }
//     for (var i = 0; i <n&& d[i].w<=c ; i++) {
//         x[d[i],i] =1
//         opt +=d[i].w
//         c-=d[i].w
//     }
//         return opt
// }


function f(c,w,x) {
    let n = w.length

    Element d = new Element(n)

    for (var i = 0; i < n; i++) {
        Element d[i] = new Element(w[i],i)
    }

    sort(d)
    let opt=0
    for (var i = 0; i < n; i++) {
        x[i] = 0
    }

    for (var i = 0; i < n && d[i].w<=c; i++) {
        x[d[i],i]=1
        opt+= d[i].w
        c-=d[i].w
    }

    return opt
}
