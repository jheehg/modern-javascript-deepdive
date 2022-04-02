// Object.create()
// 첫번째 인자 : 리턴할 객체의 프로토타입 객체
// 두번째 인자 : 리턴할 객체의 프로퍼티 지정
// 직접 프로토타입을 지정하고 그 프로토타입을 갖는 객체를 리턴하므로써 직접 상속이 가능하게 함.

// 프로토타입의 종점
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null);
//console.log(obj.toString()); // null 은 toString() 함수가 없음.

obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype);

// 두번째인자로 프로퍼티 전달
obj = Object.create(Object.prototype, {
    x: {value:1, writable: true, enumerable: true, configurable: true} // property 자체의 속성
});

console.log(obj.x);

const myProto = {x: 10};
obj = Object.create(myProto);
console.log(Object.getPrototypeOf(obj) === myProto);


// 생성자함수
const Person = function(name) {
    this.name = name;
}

obj = Object.create(Person.prototype);

obj.name = 'hee';
console.log(obj.name);
console.log(Object.getPrototypeOf(obj) === Person.prototype);


// 객체 리터럴 안에서 __proto__ 프로퍼티 지정으로 직접 상속.
// 객체는 생성자함수처럼  prototype 프로퍼티를 직접 가지지 않으므로 __proto__ 사용.
const isProto = {x: 10};
const _obj = {
    y: 20,
    __proto__: isProto
};

console.log(_obj.x, _obj.y);
console.log(Object.getPrototypeOf(_obj) === isProto);