// Set.prototype.add() 를 통해 요소를 추가하며,
// 요소가 추가된 Set객체를 반환하므로 체이닝이 가능하다.

const set = new Set();
set.add(1).add(2).add(3);
console.log(set);

// 당연히 중복으로 들어간 add는 에러 발생없이 무시함.
set.add(1); 
console.log(set);

// 중복 처리되는 원시값 중 특이한 거
const set1 = new Set();
// NaN === NaN은 false지만 Set에서는 중복으로 본다.
set1.add(NaN).add(NaN);
console.log(set1);

// 0, +0, -0 또한 중복으로 본다.
set1.add(-0).add(0).add(+0);
console.log(set1);

// Set에는 어떠한 타입도 모두 저장이 가능하다.
