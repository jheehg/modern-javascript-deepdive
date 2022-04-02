// 다른 값과 중복되지 않는 유일무이한 값이며 변경 불가능하다.

// 생성 시 Symbol 함수를 호출해 생성.
// 변경 불가능한 값이기 때문에 다른 객체타입처럼 new연산자를 통해 생성하지 않는다.
const symbolCheck = Symbol();

// 확인해봐도 외부로 노출되지 않는다.
console.log(symbolCheck);

// Symbol 함수 호출 시 인자로 넣는 문자열은 description용도로만 사용된다.
const symbolDscrt1 = Symbol('sysbol1');
const symbolDscrt2 = Symbol('sysbol1');

console.log(symbolDscrt1 === symbolDscrt2); // false

// Symbol도 암묵적으로 wrapper 객체를 생성함.
const mySymbol = Symbol('mySymbol');

// Symbol의 description 프로퍼티와 toString 메서드
console.log(mySymbol.description); // 이거 왜 undefined 나올까?
console.log(mySymbol.toString()); // Symbol(mySymbol)

// 암묵적으로 문자열 또는 숫자로 변환 안됨. 아래 두 코드는 모두 오류.
// console.log(mySymbol+"");
// console.log(+mySymbol);

// 암묵적으로 불리언 타입으로 변환은 가능
!!mySymbol;
if(mySymbol) console.log('mySymbol is true');

