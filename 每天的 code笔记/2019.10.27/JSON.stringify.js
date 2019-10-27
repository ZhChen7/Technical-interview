function jsonStringify(data) {
    let dataType = typeof data;
    if (dataType !== 'object') {
        let result = data;
        //data 可能是 string/number/null/undefined/boolean
        if (Number.isNaN(data) || data === Infinity) {
            //NaN 和 Infinity 序列化返回 "null"
            result = "null";
        } else if (dataType === 'function' || dataType === 'undefined' || dataType === 'symbol') {
            //function 、undefined 、symbol 序列化返回 undefined
            return undefined;
        } else if (dataType === 'string') {
            result = '"' + data + '"';
        }
        //boolean 返回 String()
        return String(result);
    } else if (dataType === 'object') {
        if (data === null) {
            return "null";
        } else if (data.toJSON && typeof data.toJSON === 'function') {
            return jsonStringify(data.toJSON());
        } else if (data instanceof Array) {
            let result = [];
            //如果是数组
            //toJSON 方法可以存在于原型链中
            data.forEach((item, index) => {
                if (typeof item === 'undefined' || typeof item === 'function' || typeof item === 'symbol') {
                result[index] = "null";
            } else {
                result[index] = jsonStringify(item);
            }
        });
            result = "[" + result + "]";
            return result.replace(/'/g, '"');

        } else {
            //普通对象
            /**
             * 循环引用抛错(暂未检测，循环引用时，堆栈溢出)
             * symbol key 忽略
             * undefined、函数、symbol 为属性值，被忽略
             */
            let result = [];
            Object.keys(data).forEach((item, index) => {
                if (typeof item !== 'symbol') {
                //key 如果是symbol对象，忽略
                if (data[item] !== undefined && typeof data[item] !== 'function'
                    && typeof data[item] !== 'symbol') {
                    //键值如果是 undefined、函数、symbol 为属性值，忽略
                    result.push('"' + item + '"' + ":" + jsonStringify(data[item]));
                }
            }
        });
            return ("{" + result + "}").replace(/'/g, '"');
        }
    }
}


var obj={
    name:'zc',
    sex:'男'
}
jsonStringify(obj)
