var Person = function (id, name, age) {
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
    }

    // 特权方法
    this.setName = function (name) {_name = name};
    this.getName = function() {return _name }
    this.setName(name);
}

// 在这里定义的方法和在Person中定义的方法有什么区别？
Person.prototype.sayHello = function() {
    console.log(`Hello 我叫 ${this.getName()}`);
}

var p = new Person(1, 'fanlielong', 24);
p.sayHello();
p.sayGoodby();
// p.gohome();
console.log(p.sex)
console.log(p.age)


// 静态公有属性、静态公有方法、静态私有属性、静态私有方法？







