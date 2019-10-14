let obj = {
    name: "Yvette",
    age: 18,
    job: 'engineer',
    *[Symbol.iterator]() {
        const self = this;
        const keys = Object.keys(self);
        for (let index = 0; index < keys.length; index++) {
            yield self[keys[index]];//yield表达式仅能使用在 Generator 函数中
        }
    }
};

for (var key of obj) {
    console.log(key); //Yvette 18 engineer
}
