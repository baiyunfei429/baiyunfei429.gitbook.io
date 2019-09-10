function Animal(name) {
  this.name = name;
}
Animal.prototype.getName = function() {
  return this.name;
}


function Dog(name) {
  Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.speak = function() {
  return 'wangwang';
}

var dog1 = new Dog('huahua');
console.log(dog1.getName() + ' speak ' + dog1.speak())

//----------------------------------

Animal = Object.create(Object);
Animal.getName = function() {
  return this.name;
}

Dog = Object.create(Animal);
Dog.speak = function() {
  return "wangwang";
}

var dog3 = Object.create(Dog);
dog.name = "xiaoxia"
console.log(dog3.getName() + 'speak' + dog3.speak())

//----------------------------------


class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name)
  }
  speak() {
    return "wangwang"
  }
}

var dog2 = new Dog('xiaohua')
console.log(dog2.getName() + 'speak' + dog.speak())