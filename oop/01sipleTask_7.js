var CheckObject = function() {};
CheckObject.prototype.checkName = function(name) {
        console.log('checkName ' + name);
        return this;
}

CheckObject.prototype.checkEmail = function(email) {
    console.log('checkEmail ' + email);
    return this;
}

// 怎么实现面向对象的三大特性
var obj = new CheckObject();
obj.checkName('fanlielong').checkEmail('fanlielong@huawei.com')


