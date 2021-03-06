/**
 * 프로토타입 객체
 * 
 * 모든 객체는 하나의 프로토타입을 가짐.
 * 모든 프로토타입은 생성자 함수와 연결되어 있다.
 * 
 * [[Prototype]] 내부 슬롯에 직접 접근할 수 없지만,
 * __proto__ 접근자 프로퍼티를 통해 간접적으로 접근은 가능.
 * 
 * 객체는 자신의 constructor 프로퍼티를 통해 생성자 함수에 접근.
 * 생성자함수는 자신의 prototype 프로퍼티를 통해 프로토타입에 접근할 수 있다.
 */