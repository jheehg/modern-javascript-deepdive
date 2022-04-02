// 스프레드 문법은 다음 3가지의 경우 사용이 가능하다.
// 1. 함수 호출문의 인수 목록
// 2. 배열 리터럴의 요소 목록
// 3. 객체 리터럴의 프로퍼티 목록

// 스프레드 문법은 이터러블이어야 하지만, 스프레드 프로퍼티 제안은 일반 객체를 대상으로도 사용을 허용함.

const obj = { x: 1, y: 2};
// 스프레드를 사용하면 {}를 없애고 property, value의 값의 열거 목록 자체가 된다. (하지만 이터러블은 아님)
const copy = { ...obj };
console.log(copy);
console.log(obj === copy); // 다른 메모리에 저장되어 있으므로 당연히 false

const merged = { x: 1, y: 2, ... { a: 3, b: 4}};
console.log(merged);

// 아래 코드는 오류. 함수 파라미터로 넣은 경우에는 반드시 이터러블이어야 한다.
//console.log(...obj); 

// 프로퍼티가 중복이 될 경우 나중에 오는 파라미터가 우선권을 가짐.
// 1) merge
const _merged = Object.assign({}, {x: 1, y: 2}, {y: 10, z: 3});
console.log(_merged);

// 2) change
const changed = Object.assign({}, {x: 1, y: 2}, {y: 100});
console.log(changed);

// 3) add
const added = Object.assign({}, {x: 1, y: 2}, {z: 0});
console.log(added);

// spread 문법을 적용하면..
const _merged_spread = {...{x: 1, y: 2}, ...{y: 10, z: 3}};
console.log(_merged_spread);

// 2) change
const changed_spread ={...{x: 1, y: 2}, ...{y: 100}};
console.log(changed_spread);

// 3) add
const added_spread= {...{x: 1, y: 2}, ...{z: 0}};
console.log(added_spread);

//** Object.assign() : ES6부터 도입된 메서드. 모든 파라미터로 들어온 객체를 하나의 객체로 합쳐 리턴한다.
// array로 생각하면 Array.prototype.concat() 과 비슷하다고 생각하면 될 듯.