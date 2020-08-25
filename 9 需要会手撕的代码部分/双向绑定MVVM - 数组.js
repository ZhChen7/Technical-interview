let obarr = []
const arrayProto = Array.prototype
const arrayMethods = Object.create(arrayProto)	
Object.defineProperty(arrayMethods,'push',{
    value:function mutator(){
    	console.log('obarr.push会走这里')
    }
})
obarr.__proto__ = arrayMethods;



obarr.push(0)