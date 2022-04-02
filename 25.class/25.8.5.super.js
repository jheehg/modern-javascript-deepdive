class Base {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }  
}

class Derived extends Base{
    constructor(a, b, c) {
        super(a, b);
        this.c = c;
    }
}

const derived = new Derived(1,2,3);
const base = new Base(1,2,3);

console.log(derived);
console.log(base);

// 서브 클래스에서 상속클래스의 생성자를 그대로 사용할 경우 super() 호출이 생략 가능하지만,
// 다음과 같은 예외사항 주의하기

// 1) 생성자 함수 안에서 또 다른 작업을 수행할 경우
// class DerivedOne extends Base{
//     constructor() { 
//         // super()' must be called in derived constructor before accessing |this| or returning non-object.
//        console.log('this is constructor');
//     }
// }

// const derivedOne = new DerivedOne();


// 2) 생성자 함수에서 super() 호출하기 전 this참조 안됨.
// class DerivedTwo extends Base{
//     constructor(a, b, c) {
//         this.c = c;
//         super(a, b);
//     }
// }

// const derivedTwo = new DerivedTwo(1, 2, 3);


// super 참조

// super 메서드를 사용할 떄는 다음과 같은 점을 주의한다.
// 1) super의 메서드는 반드시 super.prototype가 가지고 있는 메서드여야 자식메서드에서 사용 가능하다.
// 2) super의 prototype의 메서드를 사용하되 사용 주체가 되는 object는 자식메서드의 인스턴스여야 한다.

class Person {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `Hi, This is ${this.name}.`;
    }
}

class Student extends Person {
    greet() {
       // super 참조 메서드 사용
       // return `${super.sayHi()} Nice to meet you.`;

       // super 참조안하고 구현해보기.
       let __super = Object.getPrototypeOf(Student.prototype); // Student.prototype : Person
       return `${__super.sayHi.call(this)} Nice to meet you.`; // 여기서 this 안해주면 Person의 prototype을 가리킴.
    
    }
}

const amy = new Student('amy');
console.log(amy.greet());

// [[homeObject]]
// 메서드 자신을 바인딩한 객체를 가리키며, 함수 축약형일 경우에만 가질 수 있음.
const obj = {
    foo() {},
    boo : function() {}
}

console.log(obj.foo);
console.log(obj.boo);