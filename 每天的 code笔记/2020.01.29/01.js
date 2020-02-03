window.onload = function(){
    var ArrayId= document.getElementsByClassName('getclolrname');
    var color = ['red','orange','yellow','olive','green','teal','blue','purple','pink','brown','grey','black']
    var index = parseInt(Math.random()*12);

        ArrayId.forEach(item=>{
            item.classList.add(color[parseInt(Math.random()*12)])
        })
}
