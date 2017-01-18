function SuperClass() {
    this.superValue = "superValue";
    this.books = ['JavaScript从入门到放弃', 'JavaScript权威指南']
}

SuperClass.prototype.getSuperValue = function () {
    return this.superValue;
};


function SubClass() {
    this.subValue = "subValue";
}

// 继承父类
SubClass.prototype = new SuperClass();
SubClass.prototype.getSubValue = function () {
    return this.subValue;
};


// ==========================
var instance1 = new SubClass();
var instance2 = new SubClass();

console.log(`instance1:${instance1.books}`);
console.log(`instance2:${instance2.books}`);

instance1.books.push('颈椎病康复指南')
console.log(`instance1:${instance1.books}`);
console.log(`instance2:${instance2.books}`);

// 怎么解决？



