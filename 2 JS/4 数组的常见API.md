> ## 2019/10/10

**题目**： 数组的常见API

**解析：** 

1. `push() ` : 将value添加到数组的最后，返回新数组的长度(改变原数组)
2. `unshift()` :  添加元素到数组的开头，返回新数组的长度(改变原数组)
3. `pop()`：删除数组中最后一个元素，返回被删除的元素(改变原数组)
4. `shift()`：删除数组第一个元素，返回被删除的元素(改变原数组)
5. `join(value)`：将数组用value连接为字符串，返回被连接后的字符串(不改变原数组)
6. `reverse()`：反转数组，返回反转后的新数组(改变原数组)
7. `slice(start, end)`：获取子数组，包含原数组索引start的值到索引end的值，不包含end，返回获取的子数组(不改变原数组)
8. `splice(index, count, value1, value2....)`：从索引位index处删除count个元素，插入value1, value2等元素，返回被删除的元素组成的新数组(改变原数组)
9. `sort()`：对数组元素进行排序，返回排序后的新数组(改变原数组)
10. `toString()`：将数组中的元素用逗号拼接成字符串，返回拼接后的字符串(不改变原数组)
11. `indexOf(value)`：从索引为0开始，检查数组中是否包含有value，有则返回匹配到的第一个索引，没有则返回-1(不改变原数组)
12. `lastIndexOf(value)`：从最后的索引开始，检查数组找那个是否包含value，有则返回匹配到的第一个索引，没有返回-1(不改变原数组)
13. `concat(value)`：将数组和(或)值连接成新数组，返回新数组(不改变原数组)
14. `forEach()`：对数组进行遍历循环，对数组中每一项运行给定函数，参数都是function类型，默认有传参，参数分别为：遍历数组内容、对应的数组索引、数组本身。没有返回值
15. `map()`：指“映射”，对数组中的每一项运行给定函数，返回每次函数调用的结果组成的新数组
16. `filter()`：“过滤”功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组
17. `every()`：判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true
18. `some()`：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true
19. `reduce()`:接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值



**综上可知，改变原数组的API如下**： 

- push()、unshift()、pop()、shift()、reverse()、splice()、sort()