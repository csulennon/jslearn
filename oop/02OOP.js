var Person = function (id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log(`Hello 我叫 ${this.name}`);
}

var p = new Person(1, 'fanlielong', 24);
p.sayHello()


// 理解p实例，Person类和Person prototype之间的关系
/*
p:  
    __proto__   --> Person prototype
    id
    name
    age

Person:
    prototype   --> Person prototype
    id
    name
    age

Person prototype:
    constructor --> Person
    sayHello()
*/


// 如何定义私有属性、私有方法、公有属性、共有方法、静态公有属性、静态公有方法、静态私有属性、静态私有方法？







