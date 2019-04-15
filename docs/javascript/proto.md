---
title: 原型继承的方式
tags: javascript
---

js 继承的方式分为：

`原型链继承` `构造函数继承` `组合继承（原型链继承+构造函数继承）` `原型式继承` `寄生组合式继承`

#### 1、原型链继承

```
function Animal(type) {
    this.type = type
}
Animal.prototype.sayType = function() {
    console.log(this.type)
}
function Dog(color) {
    this.color = color
}
Dog.prototype = new Animal('dog')
let bobi = new Dog("blue")
bobi.sayType() // dog
```

当 bobi 去访问 sayType 属性时，js 会先在 bobi 的实例属性上查找，发现找不到，js 就会去 bobi 的原型对象上找，bobi 的原型对象（Dog.prototype）已经被我们改成了 animal 实例，那就去 animal 实例上找，发现还是没有，就去 animal 的原型对象上查找，这才找到.

bobi.\_\_proto\_\_ = Dog.prototype

缺点：

1>在创建实例的时候不能向 Animal 传参

2>引用类型数据被所有实例共有

```
function Animal() {
    this.names=['a','b']
}
function Dog(color) {}
Dog.prototype = new Animal()
let bobi = new Dog()
let b2 = new Dog()
bobi.names.push('c')
console.log(bobi.names,b2.names) // [a,b,c]  [a,b,c]
```

重写子类的原型等于父类的一个实例，如果父类包含引用属性，所有子类会公用该属性

#### 2、借助构造函数继承（经典继承）

通过 call()函数修改 this 指向，从而将父类属性挂载到子类实例中

```
function Animal(type) {
    this.type = type
    this.names = ["a", "b"]
}
Animal.prototype.sayType = function() {
    console.log(this.names)
}
function Dog(type) {
    Animal.call(this, type)
}
let bobi = new Dog("dog")
bobi.names.push("d")
console.log("1", bobi.type) // [a,b,c]
let b2 = new Dog("dog2")
console.log("2", b2.names) // [a,b]
bobi.sayType() // 报错 ,bobi.sayType is not a function
```

优点：

1> 可以在子类向父类传递参数

2> 避免了引用类型属性被所有实例共享

缺点 ：

父类 Animal 原型上的方法无法继承，方法只能定义在构造函数中，且每次创建 实例都会创建一次方法

#### 3、组合继承

原型链继承和经典继承双剑合璧，融合了两者的优点

```
unction Animal(type) {
    this.names = ["a", "b"]
}
Animal.prototype.sayType = function() {
    console.log("say", this.names)
}
function Dog(type) {
    Animal.call(this, type)
}
Dog.prototype = new Animal()
let bobi = new Dog("dog")
bobi.names.push("d")
bobi.sayType()
```

缺点： 会调用两次父构造函数，打印 bobi 会发现在 bobi 和 Dog.prototype 上都有一个 names 属性

#### 4、原型式继承

`未完待续...`

#### 5、寄生组合式继承

解决了两次调用的问题

```
function Animal(type) {
    this.names = ["a", "b"]
}
Animal.prototype.sayType = function() {
    console.log("say", this.names)
}
function Dog(type) {
    Animal.call(this, type)
}
// 重要的一步
var F = function() {}
F.prototype = Animal.prototype
Dog.prototype = new F()
let bobi = new Dog("dog")
```

<Valine></Valine>
