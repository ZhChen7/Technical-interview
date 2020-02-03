/*加油站问题

 */

function greedy(arr,n,k) {
    let num = 0
    for (var i = 0; i <=k; i++) {
        if(arr[i] > n){
            return
        }
    }

    for (var i = 0,s=0; i <=k ; i++) {
        s+=arr[i]
        if(s>n){
            num++
            s = arr[i]
        }
    }
    console.log(num)
}

