let test='?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=21331&rsv_pq=b8627e62001efbb9&rsv_t=eef5sqIQ98s66yOwueYH5BWlFUARj0PkHBdCA4ahbSVYQA5qO9MBoZPC0mU&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=5&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&inputT=509&rsv_sug4=509'

function f(str) {
    let str1 = str.slice(1)
    let arr=str1.split('&')
    console.log(arr)
    let map = new Map()

    arr.map(item=>{
      const [key,value] = item.split('=')
        map.set(key,decodeURIComponent(value))
    })

  return map

}



for (let item of  f(test)) {
    console.log(item)
}
