const obj = {};
const parent = {x: 1};

// __proto__는 접근자 프로퍼티임.
// 즉, getter/setter 기능을 하며 이를 통해 프로토타입에 접근 또는 할당한다.

// 프로토타입에 접근
obj.__proto__;

// 프로토타입을 할당
obj.__proto__ = parent;

console.log(obj.x); //1

// __proto__ 접근자 프로퍼티는 상속을 통해 사용된다.
// 객체가 직접 소유하는 프로퍼티가 아닌 Object.prototype의 프로퍼티.
// 모든 객체는 상속을 통해 Object.prototype.__proto__ 접근자 프로퍼티를 사용가능함.
const person = {name: 'Lee'};
console.log(person.hasOwnProperty('__proto__')); // false

console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// { get: [Function: get __proto__],
//     set: [Function: set __proto__],
//     enumerable: false,
//     configurable: true }

// 어떤 객체의 프로토타입은 Object.prototype이다.
// Object.prototype은 모든 객체 프로토타입 체인의 종점이다.
console.log({}.__proto__ === Object.prototype); // true

// __proto__ 프로퍼티로 프로토타입에 접근하도록 하는 이유는
// 서로 두 객체의 프로퍼티가 서로를 가리키게 되어 프로토타입을 탐색 시 무한루프에 빠지는 걸 방지하기 위함이다.
const obj1 = {};
const obj2 = {};
obj1.__proto__ = obj2;
//obj2.__proto__ = obj1; // TypeError: Cyclic __proto__ value

// 코드 내에서 __proto__ 사용을 권장하지 않음.
// 이유는 모든 객체가 __proto__ 접근자 프로퍼티를 사용할 수 있는게 아니므로.
const objEnd = Object.create(null);

// objEnd는 Object.__proto__를 상속받을 수 없다.
console.log(objEnd.__proto__); // undefined

// 대신 프로토타입 참조하는 함수를 사용한다.
console.log(Object.getPrototypeOf(objEnd)); // null

// 이와 같이 __proto__를 사용하는 것보다 참조하는 함수를 사용하는 걸 권장한다.
const _child = {};
const _parent = {x: 1};
console.log(Object.getPrototypeOf(_child));
Object.setPrototypeOf(_child, _parent);
// _child 자체는 변함없이 {} 이다.
// _child의 프로토타입이 변경된거지 _child는 그대로임.
// 그래서 x 프로퍼티 접근도 프로퍼티가 가지고 있기 때문에 접근 가능.
console.log(_child.x);


