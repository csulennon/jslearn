/*寄生组合式继承*/ 
function inheritProperty(subClass, superClass) {
    var prototype = Object.create(superClass.prototype);//创建对象
    prototype.constructor = subClass;//增强对象
    subClass.prototype = prototype;//指定对象
}

function SuperClass(name) {
    this.name = name;
    this.books = ['JavaScript从入门到放弃', 'JavaScript权威指南'];
}
SuperClass.prototype.sayName = function () {
    console.log(this.name);
};


function SubClass(name, age) {
    SuperClass.call(this, name);
    this.age = age;
}

inheritProperty(SubClass, SuperClass);
SubClass.prototype.sayAge = function() {
    console.log(this.age);
}

// =============
var instance = new SubClass('fanlielong', 24);
instance.sayName()
instance.sayAge()

console.log(instance instanceof SubClass);
console.log(instance instanceof SuperClass);


var instance1 = new SubClass('fanlielong', 24);
var instance2 = new SubClass('fanlielong', 24);

console.log(`instance1:${instance1.books}`);
console.log(`instance2:${instance2.books}`);

instance1.books.push('颈椎病康复指南')
console.log(`instance1:${instance1.books}`);
console.log(`instance2:${instance2.books}`);