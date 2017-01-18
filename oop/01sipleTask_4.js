var CheckObject = function() {
    return {
        checkName: function(name) {
            console.log('checkName ' + name);
        },
        checkEmail: function(email) {
            console.log('checkEmail ' + email);
        }
    }
}


// 返回出来的对象和CheckObject对象没有关系
var obj = new CheckObject();
obj.checkName('fanlielong')
obj.checkEmail('fanlielong@huawei.com')


