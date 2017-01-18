/*寄生式*/
var SuperClass = {
    superValue: "superValue",
    books: ['JavaScript从入门到放弃', 'JavaScript权威指南'],
    getSuperValue: function () {
        return this.superValue;
    }
}

function createObject (SuperClass) {
    var clone = Object.create(SuperClass);
    clone.sayHi = function () {
        console.log('hi~~~')
    }
    return clone;
}


var obj1 = createObject(SuperClass);
var obj2 = createObject(SuperClass);

obj1.sayHi();

console.log(obj1.books);
console.log(obj2.books);

obj1.books.push("balabala~~~");
console.log(obj1.books);
console.log(obj2.books);


// 什么玩意.....




