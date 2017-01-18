/*使用原型继承, 值被复制，引用公用*/
var SuperClass = {
    superValue: "superValue",
    books: ['JavaScript从入门到放弃', 'JavaScript权威指南'],
    getSuperValue: function () {
        return this.superValue;
    }
}


// 使用Object.create代替自定义函数
var instance1 = Object.create(SuperClass);
instance1.superValue = 'instance1';

var instance2 = Object.create(SuperClass);
instance2.superValue = 'instance2';

console.log(instance1.getSuperValue())
console.log(instance1.books);

console.log(instance2.getSuperValue());
console.log(instance2.books);

instance1.books.push('放弃了~~');
console.log(instance1.books);
console.log(instance2.books);

// 似乎没什么有




