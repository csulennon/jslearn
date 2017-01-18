var CheckObject = function() {
    this.checkName = function(name) {
        console.log('checkName ' + name);
    }

    this.checkEmail = function(email) {
        console.log('checkEmail ' + email);
    }
}


// 每new一次都会对类的this上的属性进行复制，消耗大
var obj = new CheckObject();
obj.checkName('fanlielong')
obj.checkEmail('fanlielong@huawei.com')


