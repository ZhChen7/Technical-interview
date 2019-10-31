
function foo() {
    setTimeout(() =>
        console.log(this.id)
    )
}


var id = 21;

foo.call({ id: 42222 });




// function foo() {
//
//     setTimeout(function () {
//         console.log('id:', this.id);  //21
//     }, 100);
// }
//
// var id = 21;
//
// foo.call({ id: 42 });

