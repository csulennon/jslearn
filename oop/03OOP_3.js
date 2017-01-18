function SuperClass() {
    this.superValue = "superValue";
    this.books = ['JavaScript从入门到放弃', 'JavaScript权威指南']
}

SuperClass.prototype.getSuperValue = function () {
    return this.superValue;
};

function SubClass() {
    // 注意this的指向
    SuperClass.call(this);
    this.subValue = "subValue";
}

// 继承父类
// SubClass.prototype = new SuperClass();
SubClass.prototype.getSubValue = function () {
    return this.subValue;
};


// ==========================
var instance = new SubClass();
var instance = new SubClass();
console.log(instance.getSubValue())

console.log(instance instanceof SubClass);
console.log(instance instanceof SuperClass);

console.log(instance.getSuperValue())
// 怎么解决？



