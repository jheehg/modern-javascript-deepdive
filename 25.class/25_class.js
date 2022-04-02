// 클래스 상속

class Animal {
    constructor(age, weight) {
        this.age = age;
        this.weight = weight;
    }
    eat() {}
    move() {}
}

// 서브클래스는 생성자를 지정해주지 않아도 자동으로 부모클래스의 생성자를 상속한다 --> "동적상속"
class Bird extends Animal {
    fly() {}
}

class Lion extends Animal {
    attack() {}
}

const sparrow = new Bird(1, 0.1);
sparrow.eat();

const lion = new Lion(5, 100);
lion.move();

console.log(sparrow instanceof Animal);
console.log(lion instanceof Animal);


// 함수로 클래스 상속 구현하기

const Animal_func = (function() {
    function Animal_func(age, weight) {
        this.age = age;
        this.weight = weight;
    }
    Animal_func.prototype.eat = function() {}
    Animal_func.prototype.move = function() {}

    return Animal_func;
}());

const Bird_func = (function() {
    function Bird_func() {
        Animal_func.apply(this, arguments);
    }
    // Animal의 프로토타입을 그대로 할당해주면 안됨.
    // 상속의 개념은 Bird가 Animal의 속성을 그대로 가지면서 Bird만의 속성을 가질 수 있어야 함.
    // 그래서 Object를 카피해주는 식으로 할당해줘야 함.
    Bird_func.prototype = Object.create(Animal_func.prototype);

    // 이거 안해주면 Animal 프로토타입 ㄱ대로 가져왔기 때문에 Animal임.
    // 생성자는 Bird 자기 자신이여야 인스턴스 생성 시 Bird의 인스턴스가 됨.
    Bird_func.prototype.constructor = Bird_func;

    // 프로토타입의 함수여야 인스턴스도 사용가능. 프로토타입이 아닌 자기자신에 지정해주면 static 함수임.
    Bird_func.prototype.fly = function() {
        return 'fly!';
    }
  
    return Bird_func;
}());

let sp = new Bird_func(1, 5);
console.log(sp.fly());


// 클래스 동적 상속 
// extends 뒤에 조건 설정을 통해 선택해서 상속할 수 있음.
class Base1 {}
function Base2() {}

let condition = true;

class Derived extends (condition? Base1 : Base2) {}

const derived = new Derived();
console.log(derived instanceof Base1);
console.log(derived instanceof Base2);


