var CheckObject = function() {};
CheckObject.prototype.checkName = function(name) {
        console.log('checkName ' + name);
}

CheckObject.prototype.checkEmail = function(email) {
    console.log('checkEmail ' + email);
}

// 每次调用都写了一个obj，重复
var obj = new CheckObject();
obj.checkName('fanlielong')
obj.checkEmail('fanlielong@huawei.com')


