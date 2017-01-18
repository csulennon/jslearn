function SuperClass() {
    this.superValue = "superValue";
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
var instance = new SubClass();
console.log(instance.getSubValue())
console.log(instance.getSuperValue())

console.log(instance instanceof SubClass);
console.log(instance instanceof SuperClass);
console.log(SubClass instanceof SuperClass)
console.log(SubClass.prototype instanceof SuperClass)

// 有什么问题？



