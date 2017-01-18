var Person = (function () {
    // 静态私有属性
    var weight = 120;

    // 静态私有方法
    var codding = function() {
        console.log('Writting JavaScript...');
    }

    return function (id, name, age) {
        // 私有属性
        var sex = '男';
        var _name;

        // 私有方法
        function gohome() {
            console.log(`go home`);
        }
        
        // 对象公有属性
        this.id = id;
        this.age = age;
        
        // 对象公有方法
        this.sayGoodby = function() {
            console.log("Bye bye!");
            // 调用静态私有属性
            codding();
        }

        // 特权方法
        this.setName = function (name) {_name = name};
        this.getName = function() {return _name }
        this.setName(name);
    }
})();


// 在这里定义的方法和在Person中定义的方法有什么区别？
Person.prototype.sayHello = function() {
    console.log(`Hello 我叫 ${this.getName()}`);
}

// 静态公有属性
Person.isChinese = true;

// 静态公有方法
Person.eat = function () {
    console.log('吃粮食！！')
}

var p = new Person(1, 'fanlielong', 24);
p.sayHello();
p.sayGoodby()

// Person.prototype.sayHello、Person.isChinese、Person.eat没有归属感







