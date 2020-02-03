//1.工厂应该有厂长，来决定到底运行哪一条产品线
//但厂长不是最终的决策者，消费者才是。消费者->子类

//工厂
var factory={};
//工厂做衣服
factory.makeClothing=function(argument){
    this.worker=50; //有50个工人
    //console.log('我们有'+this.worker);
}
//工厂做鞋子
factory.makeShoes=function(){
    console.log('做鞋子');
}
//工厂的运输
factory.transportation=function(){
    console.log('运输');
}

//工厂的厂长
factory.director=function(para){
    //这里为什么用new？ 上面我们使用了构造函数模式（var factory={}; //工厂）和单例模式（this.worker=50; //有50个工人）
    return new factory[para]();
}


//我找到工厂的厂长，告知要生产衣服
var me =factory.director('makeClothing');
console.log(me);