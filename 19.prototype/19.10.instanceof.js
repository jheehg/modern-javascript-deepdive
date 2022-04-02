function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

const parent = {};

// parent를 강제적으로 me 인스턴스 객체의 프로토타입으로 지정
Object.setPrototypeOf(me, parent);

console.log(me.__proto__); // {}

// 프로토타입을 parent로 바꿨으므로 Person의 인스턴스가 될 수 없다.
console.log(me instanceof Person);

// parent의 프로토타입인 Object는 me의 프로토타입이기도 하다.
console.log(me instanceof Object);

// parent 객체를 Person.prototype 프로퍼티에 바인딩 해 me를 Person의 인스턴스로 만들기.
// instanceof연산자는 해당 프로토타입의 constructor인 생성자함수를 가리키는게 아니라
// 생성자함수의 prototype에 바인딩된 객체가 프로토타입 체인 상에 존재하는지 확인함.
Person.prototype = parent;

console.log(me instanceof Person);


// instanceof 함수 표현.
function isInstaneOf(instance, constructor) {
    // 인스턴스의 프로토타입 확인.
    const prototype = Object.getPrototypeOf(instance);
    // 없으면 false반환
    if(prototype === null) return false;
    
    // 인스턴스의 프로토타입이 생성자함수의 프로토타입과 같으면 true반환
    // 아니면 인스턴스를 인스턴스의 프로토타입으로 넣고 다시 재귀함수
    return prototype === constructor.prototype || isInstaneOf(prototype, constructor);

}

// 생성자함수에 의해 프로토타입이 교체되어 constructor 프로퍼티와 생성자함수간의 연결이 끊겨도
// 생성자함수의 prototype 프로퍼티와 프로토타입간의 연결은 파괴되지 않으므로 instanceof는 영향을 받지 않는다.
// 아래 코드 참고.
const _Person = (function() {
    function _Person(name) {
        this.name = name;
    }
    _Person.prototype = {
        sayHello() {

        }
    };
    return _Person;
}());

const _me = new _Person('me');

// me의 프로토타입 체인 상 Person.prototype이 존재하므로 constructor 프로퍼티는 사용이 가능하지만
// _Person 생성자 함수가 prototype을 객체리터럴로 임의지정하므로써 constructor => Person이 아니게 됨.
console.log(_me.constructor === _Person);

// 하지만 me -> Person -> Person.prototype 순으로 프로토타입 체인이 이루어지는것은 변함이 없음.
console.log(_me instanceof _Person);
console.log(_me instanceof Object);
