var readline = require('readline');
process.stdin.setEncoding('utf-8');

var rl = readline.createInterface({input: process.stdin, output: process.stdout, prompt:''});
rl.prompt();

var solveMeFirst = (a,b,c,d,e)=>{
    let sum = a*1 + b*2 +  c*3 + d*4 + e*5
    let result = sum/(a+b+c+d+e)
    return +(String(result).split('.')[0]+'.'+String(result).split('.')[1].slice(0,1))

};

rl.on('line', function (data) {
    let arr = data.split(' ');
    const arr1 = arr.map(item =>{
        return item === undefined? 0.0 : item
    })

    if (arr1 && arr1.length==5) {
        let c = solveMeFirst(+arr1[0], +arr1[1],+arr1[2],+arr1[3],+arr1[4]);
        process.stdout.write('' + c + '\n');
    }else{
        process.stdout.write('' + 0.0 + '\n');
    }
});