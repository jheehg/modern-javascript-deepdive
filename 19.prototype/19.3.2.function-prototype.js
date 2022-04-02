// 객체는 prototype 프로퍼티가 없다.
const emptyObj = {};
console.log(emptyObj.hasOwnProperty('prototype'));

// 함수는 prototype 프로퍼티를 가지고 있다.
console.log((function(){}).hasOwnProperty('prototype'));

// 함수의 prototype은 생성자 함수가 생성할 인스턴스의 프로토타입이다.
// 즉, 생성자를 가질수 없는 화살표함수, 축약형 함수는 prototype 프로퍼티가 없으며 prototype도 가지지 않음.
const someObj = {
    foo: ()=> {},
    boo() {}
}
// 모두 false
console.log(someObj.foo.hasOwnProperty('prototype')); // false
console.log(someObj.boo.hasOwnProperty('prototype')); // false
console.log(someObj.foo.prototype); // undefined
console.log(someObj.boo.prototype); // undefined

function Person(name) {
    this.name = name;
}

const me = new Person('me');
// 생성자함수 Person의 prototype과 인스턴스 객체의 __proto__는 결국 같다.  
console.log(Person.prototype === me.__proto__);
console.log(me.prototype); // 객체는 prototype를 가질 수 없다.
