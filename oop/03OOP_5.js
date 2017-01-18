/*使用原型继承, 值被复制，引用公用*/
var SuperClass = {
    superValue: "superValue",
    books: ['JavaScript从入门到放弃', 'JavaScript权威指南'],
    getSuperValue: function () {
        return SuperClass.superValue;
    }
}


function SubClass(SuperClass) {
    function F() {};
    F.prototype = SuperClass;
    return new F();
}

var instance1 = SubClass(SuperClass);
var instance2 = SubClass(SuperClass);

console.log(instance1.getSuperValue())
console.log(instance1.books);

console.log(instance2.superValue);
console.log(instance2.books);

instance1.books.push('放弃了~~');
console.log(instance1.books);
console.log(instance2.books);

// 似乎没什么有




