function Queue() {
    //栈中的属性
    this.items = []

    //1.压入栈push()
    Queue.prototype.enqueue = function (...element) {
        this.items.push(...element)
    }

    //2.从队列中删除前端元素
    Queue.prototype.dequeue = function () {
        return this.items.shift()
    }

    //3.查看一下前端元素
    Queue.prototype.front = function () {
        return this.items[0]
    }

    //4.判断栈是否为空
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0
    }
    //5.获取栈中元素的个数
    Queue.prototype.size = function () {
        return this.items.length
    }
    //6.toString方法
    Queue.prototype.toString = function () {
        return this.items.toString().split(',').join(' ')
    }
}

function Graph() {
    //属性： 顶点（数组）/边（字典）
    this.vertexes = []    //顶点
    this.edges = new Map()   //边

    //方法
    //增加对应顶点的方法
    Graph.prototype.addVertex = function (v) {
        this.vertexes.push(v)
        this.edges.set(v, [])
    }

    Graph.prototype.addEdge = function (v1, v2) {
        this.edges.get(v1).push(v2)
        this.edges.get(v2).push(v1)
    }

    //实现toString 方法
    Graph.prototype.toString = function () {
        //定义字符转，保存最终的结构
        let resultString = ""
        for (let i = 0; i < this.vertexes.length; i++) {
            resultString += this.vertexes[i] + '->'
            let vEdges = this.edges.get(this.vertexes[i])
            for (let j = 0; j < vEdges.length; j++) {
                resultString += vEdges[j] + ' '
            }
            resultString += "\n"
        }
        return resultString
    }

    //图的遍历

    //初始化状态颜色
    Graph.prototype.initializeColor = function () {
        let colors = []
        for (let i = 0; i < this.vertexes.length; i++) {
            colors[this.vertexes[i]] = 'white'
        }
        return colors
    }

    //广度优先搜索算法(BFS)  基于队列完成
    Graph.prototype.bfs = function (initV, handler) {
        //1.初始化颜色
        let colors = this.initializeColor()

        //2.创建队列
        let queue = new Queue()

        //3.将顶点加入队列中
        queue.enqueue(initV)

        //4.循环从队列中取出元素
        while (!queue.isEmpty()) {
            // 4.1从队列取出一个顶点
            let v = queue.dequeue()

            //4.2 获取和顶点相连的另外顶点
            let vList = this.edges.get(v)

            //4.3 将v的颜色设置为灰色
            colors[v] = 'gray'

            //4.4  遍历所有的顶点，并且加入到队列中
            for (let i = 0; i < vList.length; i++) {
                let e = vList[i]
                if (colors[e] == 'white') {
                    colors[e] = 'gray'
                    queue.enqueue(e)
                }
            }

            //5 访问顶点
            handler(v)

            //6 将顶点设置为黑色
            colors[v] = 'black'
        }
    }


    //广度优先搜索算法（DFS）
    Graph.prototype.dfs = function (initV, handler) {
        let colors = this.initializeColor()

        //递归访问
        this.dfsVisit(initV, colors, handler)

    }

    Graph.prototype.dfsVisit = function (v, colors, handler) {
        //1.将颜色设置为灰色
        colors[v] = 'gray'
        //2.处理V节点
        handler(v)

        //3.访问v相连的顶点
        let vList = this.edges.get(v)
        for (let i = 0; i < vList.length; i++) {
            let e = vList[i]
            if (colors[e] === 'white') {
                this.dfsVisit(e, colors, handler)
            }
        }

        //4.将v设置为黑色
        colors[v] = 'black'
    }


}

//测试代码
let g = new Graph()
let myVertexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (let i = 0; i < myVertexes.length; i++) {
    g.addVertex(myVertexes[i])
}

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('A', 'D')
g.addEdge('C', 'D')
g.addEdge('C', 'G')
g.addEdge('D', 'G')
g.addEdge('D', 'H')
g.addEdge('B', 'E')
g.addEdge('B', 'F')
g.addEdge('E', 'I')


console.log(g.toString())
let result = ''
g.bfs('A', function (v) {
    result += v + ' '
})
console.log(result)

let result1 = ''
g.dfs('A', function (v) {
    result1 += v + ' '
})
console.log(result1)




