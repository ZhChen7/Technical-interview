// function knapsack(n, W, weights, values, selected) {
//     if (n == 0 || W == 0) {
//         return 0;
//     } else {
//         for (var i = n - 1; i >= 0; i--) {
//             if (weights[i] > W) {
//                 return knapsack(n - 1, W, weights, values, selected);
//             } else {
//                 var a = knapsack(n - 1, W, weights, values, selected); //不选择物品i的情况下的最优解
//                 var b = values[i] + knapsack(n - 1, W - weights[i], weights, values, selected); //选择物品i的情况下的最优解
//                 if (a > b) {
//                     selected[i] = 0; //这种情况下表示物品i未被选取
//                     return a;
//                 } else {
//                     selected[i] = 1; //物品i被选取
//                     return b;
//                 }
//             }
//         }
//     }
// }
// var selected = [], ws = [2,2,6,5,4], vs = [6,3,5,4,6]
// var b = knapsack( 5, 10, ws, vs, selected)
// selected.forEach(function(el,i){
//     if(el){
//         console.log("选择了物品"+i+ " 其重量为"+ ws[i]+" 其价值为"+vs[i])
//     }
// })


function knapsack(n,w,weights,values,selected) {
    if(n == 0 || w ==0){
        return 0;
    }else{
        for (var i = n-1; i >=0 ; i--) {
            if(weights[i]>w){
                return knapsack(n-1,w,weights,values,selected)
            }else{
                let a=knapsack(n-1,w,weights,values,selected)
                let b=value[i]+ knapsack(n-1,w-weights[i],weights,values,selected)
                if (a>b) {
                    selected[i]=0
                    return a
                }else {
                    selected[i]=1
                    return b
                }
            }
        }
    }
}
