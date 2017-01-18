var Person = (function () {
    // 静态私有属性
    var weight = 120;

    // 静态私有方法
    var codding = function() {
        console.log('Writting JavaScript...');
    }

    var _Person = function (id, name, age) {

        // 添加类型检查，注意括号
        if (! (this instanceof Person)) {
            return new Person(id, name, age);
        }

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

    _Person.prototype.sayHello = function() {
        console.log(`Hello 我叫 ${this.getName()}`);
    }

    // 静态公有属性
    _Person.isChinese = true;

    // 静态公有方法
    _Person.eat = function () {
        console.log('吃粮食！！')
    }

    return _Person;
})();


var p = Person(1, 'fanlielong', 24);
p.sayGoodby()

var p = new Person(1, 'fanlielong', 24);
p.sayGoodby()







