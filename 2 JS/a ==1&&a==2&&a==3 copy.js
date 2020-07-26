// let a =  {
//     [Symbol.toPrimitive]:((hint)=>{
//       if (hint === 'number') {
//         console.log(hint)
//       }
     
//       let i =1;
//       return ()=>{
//           return i++;
//       }
//     })()
// }

let i = 1;
Object.defineProperty(window,'a',{
  get:function(){
      return i++;
  }
})

// let a = {
//   valueOf: (()=>{
//     let i = 1;
//     return ()=>{
//        return i++;
//     }
//   })()
// }

// let a = {
//   toString: (()=>{
//     let i = 1;
//     return ()=>{
//        return i++;
//     }
//   })()
// }



console.log(a == 1 && a == 2 && a == 3);