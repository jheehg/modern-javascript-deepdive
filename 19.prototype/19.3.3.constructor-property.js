function Person(name) {
    this.name = name;
}

const me = new Person('me');

console.log(me.constructor === Person);

/**
 * 인스턴스 객체인 me는 원래 constructor 프로퍼티를 가지고 있지 않다.
 * 하지만 __proto__ 가 Person.prototype이기때문에
 * Person.prototype이 가지고 있는 constructor를 상속받아 사용이 가능하다.
 * 
 * Person 생성자함수         
 * prototype   ---------> Person.prototype
 * 
 * 여기서 다시 Person.prototype의 constructor프로퍼티는 자신을 참조하고 있는 생성자함수를 가리킴.
 * 
 *  *  */