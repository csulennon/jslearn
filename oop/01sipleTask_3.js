var CheckObject = {};
CheckObject.checkName = function(name) {
    console.log('checkName');
}

CheckObject.checkEmail = function(email) {
    console.log('checkEmail');
}

CheckObject.checkName('fanlielong')
CheckObject.checkEmail('checkEmail')

























// 没有构造方法，只是个全局对象。对象不能在使用new创建新对象时，继承这些方法
// var obj = new CheckObject();
// obj.checkName('fanlielong')
// obj.checkEmail('fanlielong@huawei.com')

